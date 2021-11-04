exports.createPages = async function ({ actions, graphql, reporter }) {
  const result = await graphql(`
    {
      allContentfulArticle {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading articles", JSON.stringify(result.errors))
  }
  console.log("result: ", result)

  result.data.allContentfulArticle.nodes.forEach(article => {
    actions.createPage({
      path: `article/${article.slug}/`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        slug: article.slug,
      },
    })
  })
}
