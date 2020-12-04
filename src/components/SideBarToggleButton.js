import { GiHamburgerMenu } from 'react-icons/gi'
import React from  'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  @media(min-width: 63rem){
    display: none;
  }
`

const SideBarToggleButton = () => (
  <Wrapper>
    <GiHamburgerMenu />
  </Wrapper>
)

export default SideBarToggleButton