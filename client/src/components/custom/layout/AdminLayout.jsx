import AuthStore from '@/store/AuthStore'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'


const AdminLayout = () => {
  const navigate = useNavigate()
  const {user} = AuthStore()
  useEffect(()=>{
    if(user?.role != "artisan"){
      navigate("/")
    }
  },[navigate,user])
  return (
    <div className='mx-auto w-[80vw]'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AdminLayout