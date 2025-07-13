import React from 'react'
import '../assets/styles/navbar.css'
import { NavLink } from 'react-router-dom'
/*.logo+.links>ul>li*5>a{Home}*/
const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo">
          <h2>WorldTreeOfBooks</h2>
        </div>
        <div className="links">
            <ul>
                <li><NavLink to="/portal/">Home</NavLink></li>
                <li><NavLink to="/portal/books/">Books</NavLink></li>
                <li><NavLink to="/portal/addbooks/">Add Books</NavLink></li>
                <li><NavLink to="/portal/cartitems/">Cart Items</NavLink></li>
                <li><NavLink to="/">Log Out</NavLink></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar