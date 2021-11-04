import { graphql } from "gatsby"
import React from "react"
import Button from "../components/atoms/button/Button"
import BasicPageLayout from "./BasicPageLayout"

export const query = graphql`
  query ($slug: String!) {
    article: contentfulArticle(slug: { eq: $slug }) {
      title
      author {
        name
        site
      }
      content {
        content
      }
      image {
        file {
          url
        }
        title
      }
    }
  }
`

export default function Article({ data: { article } }) {
  const { author, title, image, content } = article

  return (
    <BasicPageLayout>
      <h1>{title}</h1>
      <a href={author.site}>{author.name}</a>
      <img src={image.file.url} alt={image.title} />
      <Button text={"primary"} className={"primary"} />
      <Button text={"secondary"} className={"secondary"} />
    </BasicPageLayout>
  )
}
