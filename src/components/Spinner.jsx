/**
 * @returns {JSX.Element}
 */
export function Spinner() {
  const style = { width: "10rem", height: "10rem", borderWidth: "1rem" }
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div style={style} className="spinner-border" role="status"></div>
    </div>
  )
}
