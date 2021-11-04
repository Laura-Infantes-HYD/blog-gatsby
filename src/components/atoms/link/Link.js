import { Link } from "gatsby"
import React from "react"
import * as style from "./Button.module.scss"

let Button = ({
  text,
  className,
  label,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <Link
      aria-label={label || text}
      className={style[className]}
      onClick={onClick}
      disabled={disabled}
    >
      {text || children}
    </Link>
  )
}

export default Button
