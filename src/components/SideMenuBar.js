import React, { useState } from 'react'
import Tree from './TreeView'
import styled from '@emotion/styled'
import treeData from '../../postMetadata.json'

const SideMenuBarWrapper = styled.div`
  @media(max-width: 63rem){
    display: none;
  }
  width: 18rem;
  border-right: 2px solid grey;
  position: fixed;
  top: 4rem;
  left: 0;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
`

const SideMenuBar = () => {
 
  return (
    <SideMenuBarWrapper>
      <Tree data={treeData}/>
    </SideMenuBarWrapper>
  )
}

export default SideMenuBar

