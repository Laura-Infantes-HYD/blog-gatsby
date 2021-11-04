import React from "react"
import "./Header.module.scss"
import HorizontalNav from "../../molecules/HorizontalNav/HorizontalNav"
import Link from "../../atoms/Link/Link"

const Header = () => {
  return (
    <header>
      <h1>Dev blog</h1>
      <HorizontalNav>
        <Link to={`blog`} text="blog" />
        <Link to={`contact`} text="contact" />
        <Link to={`/`} text="home" />
      </HorizontalNav>
    </header>
  )
}

export default Header
