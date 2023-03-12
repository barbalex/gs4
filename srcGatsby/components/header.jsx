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
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Location } from '@reach/router'
import { window, exists } from 'browser-monads'

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
    <Location>
      {({ location }) => (
        <StyledNavbar
          color="dark"
          dark
          expand="md"
          sticky="top"
          role="navigation"
        >
          <StyledNavbarBrand tag={Link} to="/">
            {siteTitle}
          </StyledNavbarBrand>
          <NavbarToggler
            aria-label="toggle Navbar"
            onClick={() => setOpen(!open)}
          />
          <Collapse isOpen={open} navbar style={{ justifyContent: 'flex-end' }}>
            <Nav className="ml-auto" navbar>
              <StyledNavItem>
                <StyledNavLink
                  tag={Link}
                  to="/Leitbild/"
                  active={location.pathname === '/Leitbild/'}
                >
                  Leitbild
                </StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink
                  tag={Link}
                  to="/Projekte/"
                  active={location.pathname === '/Projekte/'}
                >
                  Projekte
                </StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink
                  tag={Link}
                  to="/Technologien/"
                  active={location.pathname === '/Technologien/'}
                >
                  Technologien
                </StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink
                  tag={Link}
                  to="/Kontakt/"
                  active={location.pathname === '/Kontakt/'}
                >
                  Kontakt
                </StyledNavLink>
              </StyledNavItem>
              {exists(window) && window.navigator && window.navigator.share && (
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
      )}
    </Location>
  )
}

export default Header
