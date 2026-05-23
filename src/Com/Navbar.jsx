import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black py-1 flex items-center gap-7 text-xl font-bold text-white'>
        <img
  src="https://img.magnific.com/free-vector/gradient-p-logo-template_23-2149372725.jpg?semt=ais_hybrid&w=740&q=80"
  alt="logo"
  className="w-12 h-12 ml-5"
/>
        <Link to="/" className='ml-2'>Home</Link>
        

        <Link to="/about">About</Link>

        <Link to="/men">Men</Link>

        <Link to="/women">Women</Link>

        <Link to="/kids">Kids</Link>

        <Link to="/beauty">Beauty</Link>
        

        <input type="text" placeholder="Search" className="px-7 py-1/2 border-2 border-white rounded ml-10 text-l font-normal"></input>

        <img
        src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
        alt="profile"
        className="w-9 h-9 ml-30"
        />
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtwXdUI04idsSE3B1l2zuGU3pknTPn8jSww&s"
        alt="wishlist"
        className="w-9 h-9"
        />
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AvZ5RqcKQfmovA9aPqxnICQKqfSlJ7DF3Q&s"
        alt="bag"
        className="w-9 h-9"
        />
    </div>
  )
}
 
export default Navbar