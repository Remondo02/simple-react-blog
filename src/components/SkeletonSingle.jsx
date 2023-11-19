/**
 * @returns {JSX.Element}
 */
export function SkeletonSingle() {
  const style = { backgroundColor: "#868e96", height: 600, width: 800 }
  return (
    <>
      <h1 className="card-title placeholder-glow">
        <span className="placeholder col-8 mb-4"></span>
      </h1>
      <div
        src="#"
        style={style}
        className="card-img-top img-fluid rounded mx-auto mb-4"
      ></div>
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
