import React from 'react'
import Layout from './Layout'
import { graphql } from 'gatsby'


const Post = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={ { __html: post.html } } />
      </div>
    </Layout>
  )
}

export const query = graphql`
 query($slug: String!){
  markdownRemark(fields: { slug: { eq: $slug } }){
    html
  }
 }
`
export default Post