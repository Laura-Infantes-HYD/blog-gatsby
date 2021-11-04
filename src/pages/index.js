import { graphql, Link } from "gatsby"
import React from "react"
import BasicPageLayout from "../templates/BasicPageLayout"

export const query = graphql`
  {
    articles: allContentfulArticle {
      nodes {
        author {
          name
        }
        slug
        title
      }
    }
  }
`

export default function Home({ data }) {
  return (
    <BasicPageLayout>
      {data.articles.nodes.map(article => (
        <div>
          <Link to={`article/${article.slug}`}>{article.title}</Link>
        </div>
      ))}
    </BasicPageLayout>
  )
}
