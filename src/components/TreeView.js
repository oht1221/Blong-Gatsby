import React, { useState } from 'react'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import createTreeData from '../utils/createTreeData'
import { useStaticQuery, graphql } from 'gatsby'

const TreeWrapper = styled.div`
  .item-label{
    display: flex;
    align-items: center;
    height: 1.25rem;
    margin-top: 0.25rem;
  }
  .item-label.post{
    margin-left: 0.5rem;
    font-size: 1rem;
  }
  .item-title{
    margin: 0 0.2rem;
  }
  ul{
    padding-inline-start: 1rem;
  }
  .sub-list{
    transition: max-height .3s ease-out;
    max-height: 100px;
    overflow: hidden;
  }
  .sub-list.collapsed{
    max-height: 0;
  }
  .item{
    margin-top: 0.1rem;
  }
`

const Tree = () => {
  const sourceData = useStaticQuery(graphql`
  query {
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
  `).allMarkdownRemark.nodes.map(({ frontmatter: { title }, fields: { slug } }) => ({ postTitle: title, path: slug }))
  const data = createTreeData(sourceData)
  
  return (
    <TreeWrapper>
      <ul className='tree-root'>
        {data.map((node, i) =>
          <TreeNode key={i}
                    subTree={node.children} 
                    id={node.id}
                    title={node.title}
                    type={node.type}
                    location={node.location}/>
        )}
      </ul>
    </TreeWrapper>
  )
}

const TreeNode = ({ key, subTree, id, title, type, location }) => {
  const [expanded, setExpanded] = useState(false)
  const onClick = () => {
    setExpanded(state => !state)
  }
  const chooseArrowType = () => {
    return (!expanded) ?
      <FaChevronRight className='item-arrow' /> :
      <FaChevronDown className='item-arrow' />
  }
  const exists = (tree) => (tree.length !== 0)

  const createSubNodes = (tree) => (
    tree.map((node, i) =>
      <TreeNode key={i}
                subTree={node.children}
                id={node.id}
                title={node.title}
                location={node.location}
                type={node.type} />)
  )

  return (
    <li className='item' key={key} id={id}>
      <div onClick={onClick}>
        <Link to={type === 'category' ? '#' : location} className={type === 'category' ? 'item-label' : 'item-label post'}>
          {subTree.length === 0 ? null : chooseArrowType()}
          <p className='item-title'>{title}</p>
        </Link>
      </div>
      {
        exists(subTree) ?
          <div className={expanded ? 'sub-list' : 'sub-list collapsed'}>
            <ul>
              { createSubNodes(subTree) }
            </ul> 
          </div> :
          null
      }
    </li>
  )
}

export default Tree