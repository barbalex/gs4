import React from 'react'

import Navbar from './Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar />
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
