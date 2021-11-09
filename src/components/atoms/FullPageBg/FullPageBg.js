import React from "react"
import * as style from "./FullPageBg.module.scss"

const FullPageBg = ({ colour = "primary", children }) => {
  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <div className={style[`fullPageBg${capitalize(colour)}`]}>{children}</div>
  )
}

export default FullPageBg
