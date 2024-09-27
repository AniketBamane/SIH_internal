import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div className='mx-auto w-[80vw]'>
      <Navbar />
      <Outlet />
      <Footer />
      </div>
  )
}

export default Layout