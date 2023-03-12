import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Gabriel Software" />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1170,
      }}
    >
      {children}
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
