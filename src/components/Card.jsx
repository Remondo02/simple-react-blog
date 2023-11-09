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
  return (
    <>
      <div class="card">
        {image && <img src={image} class="card-img-top" alt="" />}
        <div class="card-body">
          {title && <h5 class="card-title">{title}</h5>}
          {description && <p class="card-text">{description}</p>}
          {showButton && (
            <a href={href} class="btn btn-primary">
              {buttonLabel}
            </a>
          )}
        </div>
      </div>
    </>
  )
}
