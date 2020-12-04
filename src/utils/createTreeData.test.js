const { createTreeData } = require('./createTreeData') 
const { useStaticQuery, graphql } = require('gatsby')

const data = useStaticQuery(
  graphql`
    query{
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `
)

console.log(createTreeData(data))
