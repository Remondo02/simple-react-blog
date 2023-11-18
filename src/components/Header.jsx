import { useState } from "react"
import { useToggle } from "../hooks/useToggle.js"
import { activeClassIf } from "../utils/classnames.js"
import { useTheme } from "../hooks/useTheme.jsx"
import { Sun, Moon } from "react-bootstrap-icons"
import { themeColors } from "../utils/themeColors.js"
import { Button } from "./Button.jsx"
import { useMediaQuery } from "../hooks/useMediaQuery.js"

/**
 * @param {string} page
 * @returns {JSX.Element}
 */
export function Header({ page }) {
  const mediaQuery = useMediaQuery()
  const [expanded, toggleExpanded] = useToggle(false)
  const { theme, toggleTheme, isLight } = useTheme()
  const isLarge = mediaQuery >= 992 ? true : false

  return (
    <nav className={themeColors("Header", { theme, isLight })}>
      <a className="navbar-brand" href="#">
        MonSite
      </a>
      {!isLarge && (
        <div className="d-flex gap-2">
          <Button
            style={{ height: 42 }}
            className="d-flex align-items-center"
            type="button"
            variant={isLight ? "primary" : "warning"}
            onClick={toggleTheme}
          >
            {isLight ? <Moon /> : <Sun />}
          </Button>
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
        </div>
      )}
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
      {isLarge && (
        <Button
          style={{ height: 42 }}
          className="d-flex align-items-center"
          type="button"
          variant={isLight ? "primary" : "warning"}
          onClick={toggleTheme}
        >
          {isLight ? <Moon /> : <Sun />}
        </Button>
      )}
    </nav>
  )
}
