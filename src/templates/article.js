import { graphql } from "gatsby"
import React from "react"
import Button from "../components/atoms/Button/Button"
import Link from "../components/atoms/Link/Link"
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
      <h2>{title}</h2>
      <h3>
        <a href={author.site}>{author.name}</a>
      </h3>
      <img src={`${image.file.url}?w=800`} alt={image.title} />
      <p>{content.content}</p>
      <div>
        <Link text={"go back"} to={"/"} />
        <Button text={"secondary"} className={"secondary"} />
      </div>
    </BasicPageLayout>
  )
}
