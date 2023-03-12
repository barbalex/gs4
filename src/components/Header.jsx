import React, { useState } from 'react'
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

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <StyledNavbar color="dark" dark expand="md" sticky="top" role="navigation">
      <StyledNavbarBrand href="/">{siteTitle}</StyledNavbarBrand>
      <NavbarToggler
        aria-label="toggle Navbar"
        onClick={() => setOpen(!open)}
      />
      <Collapse isOpen={open} navbar style={{ justifyContent: 'flex-end' }}>
        <Nav className="ml-auto" navbar>
          <StyledNavItem>
            <StyledNavLink
              href="/Leitbild/"
              active={window.location.pathname === '/Leitbild/'}
            >
              Leitbild
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink
              href="/Projekte/"
              active={window.location.pathname === '/Projekte/'}
            >
              Projekte
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink
              href="/Technologien/"
              active={window.location.pathname === '/Technologien/'}
            >
              Technologien
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink
              href="/Kontakt/"
              active={window.location.pathname === '/Kontakt/'}
            >
              Kontakt
            </StyledNavLink>
          </StyledNavItem>
          {window.navigator && window.navigator.share && (
            <StyledNavItem>
              <StyledNavLink
                href="#"
                onClick={() => {
                  window.navigator.share({
                    title: 'Gabriel Software',
                    url: 'https://gabriel-software.ch',
                  })
                }}
              >
                <FaShare /> Teilen
              </StyledNavLink>
            </StyledNavItem>
          )}
        </Nav>
      </Collapse>
    </StyledNavbar>
  )
}

export default Header
