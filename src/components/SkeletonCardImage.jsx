import { useHashNavigation } from "../hooks/useHashNavigation.js"

/**
 * @returns {JSX.Element}
 */
export function SkeletonCardImage() {
  const { page } = useHashNavigation()
  let display = { display: "grid" }
  const style =
    page === "home" ? { ...display, height: 180 } : { ...display, height: 600 }
  return (
    <div style={style} className="placeholder-glow card-img-top bg-secondary">
      <span className="placeholder"></span>
    </div>
  )
}
