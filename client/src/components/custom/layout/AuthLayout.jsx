import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='mx-auto w-[80vw]'>
      <Outlet />
    </div>
  )
}

export default AuthLayout