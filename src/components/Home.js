import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

const Home = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            excerpt
            frontmatter {
              date
              title
            }
            fields{
              slug
            }
          }
        }
      }
    }`
  )
  return (
    <Layout>
      <div>
        <h1>
          Home
        </h1>
        <h4>Latest</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="latestPostItem">
            <Link to={node.fields.slug} >
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Home
