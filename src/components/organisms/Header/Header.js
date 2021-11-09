import React, { useState } from "react"
import "./Header.module.scss"
import HorizontalNav from "../../molecules/HorizontalNav/HorizontalNav"
import Link from "../../atoms/Link/Link"
import MenuIcon from "../../atoms/MenuIcon/MenuIcon"
import * as style from "./Header.module.scss"

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const toggleNav = e => {
    e.preventDefault()
    setShowNav(prev => !prev)
  }
  return (
    <header>
      <div className={style.logoMenuWrap}>
        <h1>Dev blog</h1>
        <button className={style.menuBtn} onClick={toggleNav}>
          <MenuIcon />
        </button>
      </div>
      {showNav && (
        <HorizontalNav>
          <Link to={`/`} text="home" />
          <Link to={`/blog`} text="blog" />
          <Link to={`/contact`} text="contact" />
        </HorizontalNav>
      )}
    </header>
  )
}

export default Header
