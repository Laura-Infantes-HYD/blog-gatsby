import { Link as GatsbyLink } from "gatsby"
import React from "react"
import * as style from "./Link.module.scss"

let Link = ({ text, className, label, children, to }) => {
  return (
    <GatsbyLink aria-label={label || text} className={style[className]} to={to}>
      {text || children}
    </GatsbyLink>
  )
}

export default Link
