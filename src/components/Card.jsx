import { useFetch } from "../hooks/useFetch.js"
import { useTheme } from "../hooks/useTheme.jsx"
import { themeColors } from "../utils/themeColors.js"
import { Alert } from "./Alert.jsx"
import { Button } from "./Button.jsx"
import { SkeletonCards } from "./SkeletonCardS.jsx"

/**
 * @param {boolean} dataLoading
 * @param {string} imageId
 * @param {string} title
 * @param {string} description
 * @param {string} href
 * @param {string} buttonLabel
 * @returns {JSX.Element}
 */
export function Card({
  dataLoading,
  imageId,
  title,
  description,
  href,
  buttonLabel,
}) {
  const showButton = !!(href && buttonLabel)
  const theme = useTheme()

  const imgUrl = `https://picsum.photos/id/${imageId}/280/180`
  const { data: url, loading: imgLoading, error } = useFetch(imgUrl)

  if (dataLoading || imgLoading) {
    return <SkeletonCards />
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>
  }

  return (
    <>
      {url && (
        <div className={themeColors("Card", theme)}>
          <img src={url} className="card-img-top" alt="" />
          <div className="card-body">
            {title && <h5 className="card-title">{title}</h5>}
            {description && <p className="card-text">{description}</p>}
            {showButton && (
              <Button variant={themeColors("Button", theme)} href={href}>
                {buttonLabel}
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
