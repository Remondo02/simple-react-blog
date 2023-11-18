import { useHashNavigation } from "../hooks/useHashNavigation.js"

/**
 * @returns {JSX.Element}
 */
export function SkeletonCardImage() {
const { page } = useHashNavigation()
let style
page === 'home' ? style = { height: 180 } : style = { height: 600 }
  return (
    <div style={style} className="placeholder-wave card-img-top bg-secondary">
      <span className="placeholder"></span>
    </div>
  )
}