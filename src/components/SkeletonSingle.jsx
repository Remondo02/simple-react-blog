import { SkeletonCardImage } from "./SkeletonCardImage.jsx"

/**
 * @returns {JSX.Element}
 */
export function SkeletonSingle() {
  return (
    <>
      <h1 className="card-title placeholder-glow">
        <span className="placeholder col-8 mb-4"></span>
      </h1>
      <SkeletonCardImage />
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
      <div className="d-flex justify-content-between">
        <a
          href="#"
          tabIndex="-1"
          className="btn btn-primary disabled placeholder col-3"
        ></a>
        <a
          href="#"
          tabIndex="-1"
          className="btn btn-primary disabled placeholder col-3"
        ></a>
      </div>
    </>
  )
}
