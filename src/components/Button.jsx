/**
 * @param [x: string]: string
 * @param {"primary" | "secondary" | "danger" | "light" | "dark"} variant
 * @returns {JSX.Element}
 */
export function Button({ variant = "primary", ...props }) {
  const className = props.className
  ? `btn btn-${variant} ${props?.className}`
  : `btn btn-${variant}`
  const newProps = {
    ...props,
    className: className,
  }

  if (props.href) {
    return <a {...newProps} />
  }
  return <button {...newProps} />
}
