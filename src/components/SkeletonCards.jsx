/**
 * @returns {JSX.Element}
 */
export function SkeletonCards() {
  const style = { backgroundColor: "#868e96", height: 180, width: "100%" }
  return (
    <>
      <div>
        <div aria-hidden="true">
          <div className="card">
            <div src="#" style={style} className="card-img-top img-fluid"></div>
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
      </div>
    </>
  )
}
