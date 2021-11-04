import React from "react"
import * as style from "./HorizontalNav.module.scss"

const HorizontalNav = ({ children }) => {
  return <nav className={style.horizontalNav}>{children}</nav>
}

export default HorizontalNav
