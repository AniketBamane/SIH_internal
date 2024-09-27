import { useState } from 'react'
import Layout from './components/custom/layout/Layout'
import Order from './pages/Order'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import WorkshopPage from './pages/Workshop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      {/* //auth pages */}

      {/* <Route path="/verification" element={<Verification />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
      {/* //normal pages */}
      <Route element={<Layout></Layout>}>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/workshop" element={<WorkshopPage />} />
      <Route path='/orders' element={<Order />} />
      <Route path='/cart' element={<Cart />} />
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
