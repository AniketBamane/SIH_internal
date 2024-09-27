import { useState } from 'react'
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

function App() {
  // const [count, setCount] = useState(0)

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
      {/* <Route path='/search' element={<SearchPage />} /> */}
      </Route>
      {/* <Route path='/auth/'  element={<AdminLayout />}>
        <Route path='get-restaurants' element={<Restaurant />} />
        <Route path='restaurant/:id' element={<RestaurantDetail />} />
        <Route path="orders" element={<AdminOrder />} />
       </Route> */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App
