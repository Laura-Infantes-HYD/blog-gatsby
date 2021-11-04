import React from "react"
import Header from "../components/organisms/Header/Header"

const BasicPageLayout = ({ hasHeader = true, hasFooter = true, children }) => {
  return (
    <>
      {hasHeader && <Header />}
      <main>{children}</main>
      {hasFooter && <footer>TO DDO: Create footer</footer>}
    </>
  )
}

export default BasicPageLayout
