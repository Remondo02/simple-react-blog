/**
 * @param children
 * @param {"primary" | "secondary" | "danger" | "light" | "dark"} variant
 * @returns {JSX.Element}
 */
export function Button({ variant = "primary", ...props }) {
  const initialProps = props
  const { className, ...filteredProps } = initialProps
  const newProps = {
    ...filteredProps,
    className: `btn btn-${variant} ${initialProps?.className}`,
  }

  if (props.href) {
    return <a {...newProps} />
  }
  return <button {...newProps} />
}
