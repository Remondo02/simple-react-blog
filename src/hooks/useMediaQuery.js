import { useEffect, useState, useRef } from "react"

export function useMediaQuery() {
  const initialWidthValue = useRef(window.outerWidth)
  const [windowWidth, setWindowWith] = useState(initialWidthValue.current)

  useEffect(() => {
    const handleResize = () => {
      setWindowWith(window.outerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [windowWidth])

  return windowWidth
}
