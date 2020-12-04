import React from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  text-align: center;
  padding: 0.5rem;
  border-top: 1px solid grey;
  height: 4rem;
  background-color: white;
  position: relative;
  z-index: 1;
`

const Footer = () => (
  <FooterWrapper>Copyright</FooterWrapper>
)

export default Footer