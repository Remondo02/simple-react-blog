export function themeColors(element, { theme, isLight, reverseTheme }) {
  if (element === "Card") {
    const cardBorder = isLight === "secondary" ? "light" : "dark-subtle"
    return `card border-${cardBorder} bg-${theme} text-${reverseTheme}`
  }
  if (element === "Button" || element === "ThemeButton") {
    return isLight ? "primary" : "warning"
  }
  if (element === "Header") {
    return `p-3 shadow-sm navbar navbar-expand-lg navbar-${theme} bg-${theme}`
  }
  if (element === "Modal") {
    return `bg-${theme} text-${reverseTheme}`
  }
  if (element === "Text") {
    return `text-${reverseTheme}`
  }
}
