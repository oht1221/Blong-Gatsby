import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SideMenuBar from './SideMenuBar'
import IndexBar from './IndexBar'
import styled from '@emotion/styled'

const PageContent = styled.div`
  padding: 3rem 10rem 10% 10%;
  text-align: justify;
  min-width: 40rem;
`
const PageContainer = styled.div`
  margin-top: 4rem;
  margin-left: 18rem;
  margin-right: 18rem;
  min-height: 85%;

  @media(max-width: 63rem){
    {
      margin-left: 0;
    }
  }
  @media(max-width: 88rem){
    {
      margin-right: 0;
    }
  }
  
`
const OutterContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
const Layout = ({children}) => (
  <OutterContainer>
    <Header/>
    <SideMenuBar/>
    <PageContainer>
      <PageContent>
        {children}
      </PageContent>
    </PageContainer>
    <IndexBar/>
    {/* <Footer/> */}
  </OutterContainer>
)

export default Layout