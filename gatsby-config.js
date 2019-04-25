module.exports = {
  siteMetadata: {
    title: `Marie Hooper`,
    description: `Portfolio site for Marie Hooper`,
    author: `@mariehooper`,
    siteUrl: `https://mariehooper.me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `marie-hooper-portfolio`,
        short_name: `marie-hooper-portfolio`,
        start_url: `/`,
        background_color: `#01579b`,
        theme_color: `#01579b`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato", "Roboto:300"],
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-offline`,
  ],
}
