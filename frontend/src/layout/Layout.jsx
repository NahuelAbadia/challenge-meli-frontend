import React from 'react'

const Layout = ({ children }) => {
  return (
    <div style={{ background: "#EEEEEE", height: "100vh" }}>
      {children}
    </div>
  )
}

export default Layout