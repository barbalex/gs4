import React from 'react'

import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Header />
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

export default Layout
