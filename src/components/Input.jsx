import { useId } from "react"

/**
 * @param {string} type 
 * @param {string} label 
 * @param [x: string]: string
 * @returns {JSX.Element}
 */
export function Input({ type, label, ...props }) {
  const id = useId()
  const InputComponent = type === "textarea" ? "textarea" : "input"
  return (
    <div>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <InputComponent className="form-control" id={id} {...props} />
    </div>
  )
}
