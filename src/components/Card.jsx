import { useFetch } from "../hooks/useFetch.js"
import { useTheme } from "../hooks/useTheme.jsx"
import { themeColors } from "../utils/themeColors.js"
import { Alert } from "./Alert.jsx"
import { Button } from "./Button.jsx"
import { SkeletonCardImage } from "./SkeletonCardImage.jsx"

/**
 * @param {string} imageId
 * @param {string} title
 * @param {string} description
 * @param {string} href
 * @param {string} buttonLabel
 * @returns {JSX.Element}
 */
export function Card({ imageId, title, description, href, buttonLabel }) {
  const showButton = !!(href && buttonLabel)
  const theme = useTheme()

  const imgUrl = `https://picsum.photos/id/${imageId}/280/180`
  const { data: url, loading, error } = useFetch(imgUrl)

  return (
    <>
      <div className={themeColors("Card", theme)}>
        {loading && <SkeletonCardImage />}
        {error && <Alert type="danger">{error.toString()}</Alert>}
        {url && <img src={url} className="card-img-top" alt="" />}
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
    </>
  )
}
