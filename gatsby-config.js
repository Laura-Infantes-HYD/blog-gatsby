require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yqczvlh7qvjq`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
