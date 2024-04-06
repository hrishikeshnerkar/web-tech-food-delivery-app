import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Route,Routes} from 'react-router-dom'

const App = () => {
  return (<>
    <div className='app'>
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='./cart' element={<Cart />} />
        <Route path='./order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
  </>
  )
};

export default App