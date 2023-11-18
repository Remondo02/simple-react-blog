import { useTheme } from "../hooks/useTheme.jsx"
import { themeColors } from "../utils/themeColors.js"
import { Button } from "./Button.jsx"
import { Image } from "./Image.jsx"

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
  return (
    <>
      <div className={themeColors("Card", theme)}>
        {imageId && (
          <Image
            className="card-img-top"
            imageId={imageId}
            width={280}
            height={180}
          />
        )}
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
