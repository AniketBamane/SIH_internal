import { useEffect, useState } from 'react'
import Layout from './components/custom/layout/Layout'
import Order from './pages/Order'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import WorkshopPage from './pages/Workshop'
import Home from './pages/Home'
import AuthLayout from './components/custom/layout/AuthLayout'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Verification from './pages/Auth/Verification'
import MarketPlace from './pages/MarketPlace'
import SitePage from './pages/SitePage'
import MyProducts from './pages/Admin/MyProducts'
import MyWorkshops from './pages/Admin/MyWorkshops'
import MySites from './pages/Admin/MySites'
import AdminLayout from './components/custom/layout/AdminLayout'
import SiteDetail from './pages/SiteDetail'
// import AuthStore from './store/AuthStore'
// import Loading from './components/custom/Loading'

function App() {
  // const {getCurrentUser,user} = AuthStore()
  //  const [loading,setLoading] = useState(false)
  //  const [error,setError] =  useState("")
  //  const fetchEverything = async ()=>{
  //   setLoading(true)
  //   try{
  //     user && await getCurrentUser()

  //    }catch(err){
  //     setError(err.message)
  //    }finally{
  //     setLoading(false)
  //    }
  //  }
  //  useEffect(()=>{
  //   fetchEverything()
  //  },[])

  //  if(loading) {
  //   return <Loading />
  //  }

  return (
    <Routes>
      {/* //auth pages */}
      <Route element={<AuthLayout />}>
      <Route path="/verification" element={<Verification/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Route>
      {/* //normal pages */}
      <Route element={<Layout></Layout>}>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/workshop" element={<WorkshopPage />} />
      <Route path='/orders' element={<Order />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='/heritage-sites' element={<SitePage />} />
      <Route path='/site/:id' element={<SiteDetail />} />
      {/* <Route path='/search' element={<SearchPage />} /> */}
      </Route>
      <Route path='/auth/'  element={<AdminLayout />}>
        <Route path='my-products' element={<MyProducts />} />
        <Route path='my-workshops' element={<MyWorkshops />} />
        <Route path="my-sites" element={<MySites />} />
       </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App
