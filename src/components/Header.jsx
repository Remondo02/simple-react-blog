import { useState } from "react"
import { useToggle } from "../hooks/useToggle.js"
import { activeClassIf } from "../utils/classnames.js"
import { useTheme } from "../hooks/useTheme.jsx"
import { Sun, Moon } from "react-bootstrap-icons"
import { themeColors } from "../utils/themeColors.js"
import { Button } from "./Button.jsx"

/**
 * @param {string} page
 */
export function Header({ page }) {
  const [expanded, toggleExpanded] = useToggle(false)
  const { theme, toggleTheme, isLight } = useTheme()

  return (
    <nav className={themeColors("Header", { theme, isLight })}>
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
      <Button style={{ height: 42 }} className="d-flex align-items-center" type="button" variant={isLight ? "primary" : "light"} onClick={toggleTheme}>
        {isLight ? <Moon /> : <Sun />}
      </Button>
    </nav>
  )
}
