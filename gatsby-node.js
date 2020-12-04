const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const { createContentsList }= require('./createContentsList')
const fs = require('fs')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `contents` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postResult = await graphql(`
    query{
      allMarkdownRemark{
        edges{
          node{
            fields{
              slug
            }
          }
        }
      }
    }`)
  
  postResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/Post.js`),
      context: {
        slug: node.fields.slug
      }
    })
  })
}

exports.onPreInit = async () => {
  const contentsList = JSON.stringify(createContentsList('contents'), null, 2)
  console.log(contentsList)
  await fs.writeFile(`${__dirname}/postMetadata.json`, contentsList, err => console.log(err))
}
