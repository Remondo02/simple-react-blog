import { useState } from "react"
import { useToggle } from "../hooks/useToggle.js"
import { activeClassIf } from "../utils/classnames.js"
import { useTheme } from "../hooks/useTheme.jsx"
import { Sun, Moon } from "react-bootstrap-icons"

/**
 * @param {string} page
 */
export function Header({ page }) {
  const [expanded, toggleExpanded] = useToggle(false)
  const { theme, toggleTheme, isLight } = useTheme()
  const navClassName = `p-3 shadow-sm navbar navbar-expand-lg navbar-${theme} bg-${theme}`
  const themeSwitcherColor =
    theme === "light" ? "btn btn-primary" : "btn btn-light"

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
      <button
        type="button"
        className={themeSwitcherColor}
        onClick={toggleTheme}
      >
        {isLight ? <Moon /> : <Sun />}
      </button>
    </nav>
  )
}
