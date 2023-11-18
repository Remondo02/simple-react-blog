/**
 * @param children
 * @param {"danger" | "info" | "warning"} type
 * @returns {JSX.Element}
 */
export function Alert({ type = "info", children }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  )
}
