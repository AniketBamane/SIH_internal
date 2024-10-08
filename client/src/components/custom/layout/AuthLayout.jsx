import AuthStore from '@/store/AuthStore'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthLayout = () => {
  const {isAuthenticated} = AuthStore()
  const navigate = useNavigate()
  useEffect(()=>{
    if(isAuthenticated){
      navigate('/')
    }
  },[isAuthenticated])
  return (
    <div className='mx-auto w-[80vw]'>
      <Outlet />
    </div>
  )
}

export default AuthLayout