/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Blong`,
    subTitle: `Hong's blog`,
    github: 'https://github.com/oht1221/Blong-Gatsby',
    linkedIn: 'https://www.linkedin.com/in/hongtaek-oh-9b789312a/'
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
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true
      }
    }
  ],
}
