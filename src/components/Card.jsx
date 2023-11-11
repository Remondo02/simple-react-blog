import { useTheme } from "../hooks/useTheme.jsx"
import { Button } from "./Button.jsx"

/**
 * @param {string} image
 * @param {string} title
 * @param {string} description
 * @param {string} href
 * @param {string} buttonLabel
 * @returns {JSX.Element}
 */
export function Card({ image, title, description, href, buttonLabel }) {
  const showButton = !!(href && buttonLabel)
  const { theme, themeText } = useTheme()
  const divClassName = `card border-${themeText} bg-${theme} text-${themeText}`

  return (
    <>
      <div className={divClassName}>
        {image && <img src={image} className="card-img-top" alt="" />}
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {description && <p className="card-text">{description}</p>}
          {showButton && (
            <Button variant={themeText} href={href}>
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
