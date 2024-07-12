import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import navstyle from './Navbar.module.css'
export default function Navbar() {
  return <>

<nav className={`navbar navbar-expand-lg ${navstyle.back}`}>
  <div class="container">
  <NavLink className="navbar-brand" to="/"><img src="images/logo2.png" className={`${navstyle.soil}`} alt="" /></NavLink>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link m-2" aria-current="page" to="/Home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-2" to="/About">About</NavLink>
        </li>
       
        <li className="nav-item">
          <Link className={`  ${navstyle.navlink} p-1 m-2 bg-success`} to="/">Logout</Link>
        </li>
       
       
      </ul>
      
    </div> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
  <li className="nav-item">
          <NavLink className="nav-link m-2" aria-current="page" to="/Home"><i class="fa-solid fa-house"></i> Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-2" to="/About"> <i class="fa-regular fa-comment"></i> About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-2" to="/History"><i class="fa-regular fa-bookmark"></i> History</NavLink>
        </li>
  </ul>
  
  <Link className={`${navstyle.navlink} p-1 m-2`} to="/"> <i class="fa-solid fa-right-from-bracket" style={{color: 'red'}}></i> Logout</Link>

  
</div>

  </div>
</nav>
  
  
  </>
}
