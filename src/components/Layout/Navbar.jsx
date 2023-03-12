import React, { useState, useEffect } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { FaShare } from 'react-icons/fa'
import styled from '@emotion/styled'

const StyledNavbar = styled(Navbar)`
  &.bg-dark {
    background-color: #145f00 !important;
  }
`
const StyledNavbarBrand = styled(NavbarBrand)`
  font-weight: 600;
`
const StyledNavItem = styled(NavItem)`
  margin-bottom: 0 !important;
`
const StyledNavLink = styled(NavLink)`
  font-weight: ${(props) => (props.active ? '800' : '600')} !important;
  color: ${(props) =>
    props.active ? 'white' : 'rgba(255, 255, 255, 0.7)'} !important;
`

const NavbarComponent = () => {
  const [open, setOpen] = useState(false)

  const [pathname, setPathname] = useState('')
  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return (
    <StyledNavbar color="dark" dark expand="md" sticky="top" role="navigation">
      <StyledNavbarBrand href="/">Gabriel Software</StyledNavbarBrand>
      <NavbarToggler
        aria-label="toggle Navbar"
        onClick={() => setOpen(!open)}
      />
      <Collapse isOpen={open} navbar style={{ justifyContent: 'flex-end' }}>
        <Nav className="ml-auto" navbar>
          <StyledNavItem>
            <StyledNavLink href="/leitbild/" active={pathname === '/leitbild/'}>
              Leitbild
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="/projekte/" active={pathname === '/projekte/'}>
              Projekte
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink
              href="/technologien/"
              active={pathname === '/technologien/'}
            >
              Technologien
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="/kontakt/" active={pathname === '/kontakt/'}>
              Kontakt
            </StyledNavLink>
          </StyledNavItem>
        </Nav>
      </Collapse>
    </StyledNavbar>
  )
}

export default NavbarComponent
