import React from "react"
import * as style from "./Button.scss"

let Button = ({
  text,
  //className,
  label,
  onClick,
  disabled = false,
  children,
}) => {
  console.log("style", style)
  return (
    <button
      aria-label={label || text}
      className={style.primary}
      onClick={onClick}
      disabled={disabled}
    >
      {text || children}
    </button>
  )
}

export default Button
