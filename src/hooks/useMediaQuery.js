import { useEffect, useState, useRef } from "react"

export function useMediaQuery() {
  const initialScreenSize = useRef(window.innerWidth)
  const [screenSize, setScreenSize] = useState(initialScreenSize.current)
  const [activeMenu, setActiveMenu] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [screenSize])

  useEffect(() => {
    if (screenSize < 992) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return activeMenu
}
