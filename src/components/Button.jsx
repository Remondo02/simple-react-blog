import { useContext } from "react"
import { ThemeContext } from "../hooks/useTheme.jsx"

/**
 * @param children
 * @param {"primary" | "secondary" | "danger"} variant
 * @returns {JSX.Element}
 */
export function Button({ variant = "primary", ...props }) {
  const newProps = {
    ...props,
    className: `btn btn-${variant}`,
  }
  const theme = useContext(ThemeContext)

  return <button>{theme}</button>

  if (props.href) {
    return <a {...newProps} />
  }
  return <button {...newProps} />
}
