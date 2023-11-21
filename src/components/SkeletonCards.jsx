import { SkeletonCardImage } from "./SkeletonCardImage.jsx"

export function SkeletonCards({ arraySize }) {
  const nbCards = Array(arraySize)
  const cardsArray = Array.from(nbCards.keys())

  return (
    <>
      {cardsArray && (
        <div className="row gy-4">
          {cardsArray.map((i) => (
            <div
              key={i}
              className="col-12 col-sm-6 col-lg-4"
              aria-hidden="true"
            >
              <div className="card">
                <SkeletonCardImage />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    href="#"
                    tabIndex="-1"
                    className="btn btn-primary disabled placeholder col-6"
                  ></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
