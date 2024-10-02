import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authStore from '@/store/AuthStore'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Loading from '../Loading'
import OrderStore from '@/store/OrderStore'
import WorkShopStore from '@/store/WorkStore'

const Layout = () => {

  // const {getOrders} = orderStore()
  const {isAuthenticated,user,getCurrentUser} = authStore()
  const navigate = useNavigate()
  const {getOrders} = OrderStore()
  const {getMyWorkshops} = WorkShopStore()
  const [loading,setLoading] = useState(false)
  const [error,setError] =  useState("")
  const fetchEverything = async ()=>{
   setLoading(true)
   try{
    await Promise.all([getCurrentUser(),getOrders(),getMyWorkshops()]);
    }catch(err){
      console.log(err)
     setError(err.message)
    }finally{
     setLoading(false)
    }
  }

  useEffect(()=>{
    if(!isAuthenticated){
      navigate("/login")
    }else{
      if(user.role == "artisan"){
        navigate("/auth/my-workshops")
      }else{
       fetchEverything()
      }
    }
  },[isAuthenticated])
  if(loading){
    return <Loading />
  }
  if(error){
    return <div>{error}</div>
  }
  return (
    <div className='mx-auto w-[80vw]'>
      <Navbar />
      <Outlet />
      <Footer />
      </div>
  )
}

export default Layout