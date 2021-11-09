import "../common/style/_index.scss"
import { graphql } from "gatsby"
import React from "react"
import BasicPageLayout from "../templates/BasicPageLayout"
import HorizontalNav from "../components/molecules/HorizontalNav/HorizontalNav"
import Link from "../components/atoms/Link/Link"
import FullPageBg from "../components/atoms/FullPageBg/FullPageBg"

export default function Home() {
  return (
    <BasicPageLayout hasHeader={false} hasFooter={false}>
      <FullPageBg>
        <h1>Dev Blog</h1>
        <h2>This is a subtitle</h2>
        <HorizontalNav>
          <Link to={`/blog`} text="blog" />
          <Link to={`/contact`} text="contact" />
        </HorizontalNav>
      </FullPageBg>
    </BasicPageLayout>
  )
}
