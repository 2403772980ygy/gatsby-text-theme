module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      // for more information visit: https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
        anonymize: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: "https://www.whatever.com", // don't forget to change this to your site!
      },
    },
  ],
};
