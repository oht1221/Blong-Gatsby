import React from 'react'
import styled from '@emotion/styled'

const LinkButtonWrapper = styled.a`
  text-decoration: none;
  color: grey;
  margin-left: 0.5rem;
  :hover{
    color: inherit
  }
`
const LinkIcon = ({ url, Icon, title }) => {
  return (
    <LinkButtonWrapper href={url} title={title}>
      <Icon/>
    </LinkButtonWrapper>
  )
}

export default LinkIcon