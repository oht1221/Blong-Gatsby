import React from 'react'
import { Link } from 'gatsby'
import SideBarToggleButton from './SideBarToggleButton'
import styled from '@emotion/styled'
import LinkIcon from './LinkIcon'
import { useStaticQuery, graphql } from 'gatsby'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const HeaderWrapper = styled.header`
  height: 4rem;
  display:flex;
  width: 100%;
  border-bottom: 5px solid grey;
  align-items: center;
  position: fixed;
  top:0;
  left:0;
  background-color: white;

  h1{
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2{
    font-size: 1rem;
    color: grey
  }
`
const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media(min-width: 88rem){
    margin-right: 18rem;
  }
  font-size: 2rem;
  margin-top: 0.5rem;
  padding-right: 1rem;
`
const BlogTitle = styled.div`
  margin-left: 2rem;
  h1{
    display: inline-block;
  }
  h2{
    display: inline-block;
  }
`
const Header = () => {
  const data = useStaticQuery(
    graphql`
      query{
        site{
          siteMetadata{
            title
            subTitle
            github
            linkedIn
          }
        }
      }
    `
  )
  return (
    <HeaderWrapper>
      <SideBarToggleButton />
      <BlogTitle>
        <Link to={'/'} style={{ color: 'black', textDecoration: 'none' }}>
          <h1>{data.site.siteMetadata.title}</h1>
          <h2>&nbsp;&nbsp;{data.site.siteMetadata.subTitle}</h2>
        </Link>
      </BlogTitle>
      <NavLinks>
        <LinkIcon url={data.site.siteMetadata.github} Icon={AiFillGithub} title='github'/>
        <LinkIcon url={data.site.siteMetadata.linkedIn} Icon={AiFillLinkedin} title='linkedIn'/>
      </NavLinks>
    </HeaderWrapper>
  )
}

export default Header
