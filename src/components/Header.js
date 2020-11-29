import React from 'react'
import { Link } from 'gatsby'
import SideBarToggleButton from './SideBarToggleButton'

const Header = () => (
    <header className='header'>
      <SideBarToggleButton />
      <Link to={'/'} style={ { color: 'black', textDecoration: 'none' }}>
        <h1 style={ { display: 'inline' }}>Blong</h1>
        <h2 style={ { display: 'inline' }}>&nbsp;&nbsp;Hong's blog</h2>
      </Link>
      
    </header>
)

export default Header