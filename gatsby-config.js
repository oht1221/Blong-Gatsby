/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title_1: `Blong`,
    title_2: `Hong's blog`
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `contents`,
        path: `${__dirname}/contents/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,
        footnotes: true, 
        pednatic: true,
        gfm: true,
      }
    }
  ],
}
