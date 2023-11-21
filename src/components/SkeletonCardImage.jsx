import { useHashNavigation } from "../hooks/useHashNavigation.js"

/**
 * @returns {JSX.Element}
 */
export function SkeletonCardImage() {
  const { page } = useHashNavigation()
  const animation = {
    animation: "2s ease-in-out infinite",
  }

  const style =
    page === "home"
      ? { ...animation, aspectRatio: "280/180" }
      : {
          ...animation,
          aspectRatio: "800/600",
          borderRadius: "calc(0.375rem - 1px)",
          marginBottom: "1.5rem",
        }

  return (
    <div
      style={style}
      className="placeholder-glow card-img-top img-fluid bg-secondary mx-auto d-block"
    >
      <span
        style={{ height: "100%", width: "100%" }}
        className="placeholder rounded"
      ></span>
    </div>
  )
}
