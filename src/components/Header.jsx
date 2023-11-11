import { useState } from "react"
import { useToggle } from "../hooks/useToggle.js"
import { activeClassIf } from "../utils/classnames.js"
import { useTheme } from "../hooks/useTheme.jsx"

/**
 * @param {string} page
 */
export function Header({ page }) {
  const [expanded, toggleExpanded] = useToggle(false)
  const { theme, toggleTheme } = useTheme()
  const navClassName = `p-3 shadow-sm navbar navbar-expand-lg navbar-${theme} bg-${theme}`

  return (
    <nav className={navClassName}>
      <a className="navbar-brand" href="#">
        MonSite
      </a>
      <button
        onClick={toggleExpanded}
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={expanded}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={activeClassIf(page === "home", "nav-link")} href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={activeClassIf(page === "contact", "nav-link")}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button onClick={toggleTheme}>Changer de theme</button>
    </nav>
  )
}
