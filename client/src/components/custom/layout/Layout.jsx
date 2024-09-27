import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='mx-auto w-[90vw]'>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
      </div>
  )
}

export default Layout