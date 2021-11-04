import React from "react"

const BasicPageLayout = ({ hasHeader = true, hasFooter = true, children }) => {
  return (
    <>
      {hasHeader && <header>TO DDO: Create header</header>}
      <main>{children}</main>
      {hasFooter && <footer>TO DDO: Create footer</footer>}
    </>
  )
}

export default BasicPageLayout
