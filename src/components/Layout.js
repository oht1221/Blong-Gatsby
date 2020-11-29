import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SideMenuBar from './SideMenuBar'
import IndexBar from './IndexBar'
import PageContent from './PageContent'

const Layout = ({children}) => (
  <div className='outterContainer'>
    <Header/>
    <SideMenuBar/>
    <div className='pageContainer'>
      <PageContent>
        {children}
      </PageContent>
    </div>
    <IndexBar/>
    <Footer/>
  </div>
)

export default Layout