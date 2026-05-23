import React from 'react'
import Navbar from './Com/Navbar'
import Content from './Com/Content'
import Footer from './Com/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './Com/About'
import Men from './Com/Men'
import Women from './Com/Women'
import Kids from './Com/Kids'
import Beauty from './Com/Beauty'

function App() {

  const users = [
  {
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg", // Men
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0383/1771/9684/files/Namsan_Co-ord_Set_1.webp?v=1771933744", // Women
  },

  {
    image:
      "https://images.meesho.com/images/products/789864810/6vz4w_512.webp?width=512", // Kids
  },

  {
    image:
      "https://swissbeauty.in/cdn/shop/articles/400X400_FEB-2022_04_11348a58-1642-4fcd-aab0-664be9e8ad22.jpg?v=1707812938", // Beauty
  }
]
  return (
    <div className="min-h-screen flex flex-col">
    
    <Navbar />

    <div className="flex-grow">
      <Routes>
        <Route path='/' element={<Content users={users} />} />
        <Route path="/about" element={<About />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
      </Routes>
    </div>

    <Footer />

  </div>
  )
}

export default App