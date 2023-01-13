import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home/Index'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Cart from '../Pages/Cart/Cart'
import Header from '../Components/Header/Header'
import Login from '../Pages/Login/Login'
const RoutsConfig = () => {
  return (
      <div>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/login' element={<Login />} />
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default RoutsConfig