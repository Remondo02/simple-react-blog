import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useTheme } from "../hooks/useTheme.jsx"
import { themeColors } from "../utils/themeColors.js"

export function Modal({ children, onClose }) {
  const theme = useTheme()
  const dialogRef = useRef(null)

  useEffect(() => {
    dialogRef.current.showModal()
  }, [])

  const handleClose = (e) => {
    e.preventDefault()
    onClose?.()
  }

  return createPortal(
    <dialog
      className={themeColors("Modal", theme)}
      style={{ width: "calc(100vw - 2rem", maxWidth: 600 }}
      ref={dialogRef}
      onCancel={handleClose}
      onClose={handleClose}
    >
      {children}
    </dialog>,
    document.body
  )
}
