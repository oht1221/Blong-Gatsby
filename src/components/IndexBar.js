import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 18rem;
  border-left: 2px solid grey;
  position: fixed;
  top: 4rem;
  right:0;
  height: 100%;
  .content{
    margin: 2rem 1.5rem;
  }
  @media(max-width: 88rem){
    {
      display: none;
    }
  }
`
const IndexBar = () => (
  <Wrapper>
    <div className='content'>
      Index lists
    </div>
  </Wrapper>
)

export default IndexBar