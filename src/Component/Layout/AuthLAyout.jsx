import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import navstyle from '../Navbar/Navbar.module.css'

export default function 
() {
  return <>
  {/* <nav className="navbar navbar-expand-lg ">
  <div className="container">
  <NavLink className="navbar-brand" to="/"><img src="images/logo2.png" className={`${navstyle.soil}`} alt="" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
  </div>
</nav> */}
  <Outlet></Outlet>
  </>
}
