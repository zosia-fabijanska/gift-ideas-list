import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #AC47D3;
  color: white;
`

const NavHeading = styled.h1`
  margin: 0 0 0 30px;
`

const Navbar = () => (
  <Nav>
    <NavHeading>Gift List</NavHeading>
  </Nav>
)
export default Navbar

