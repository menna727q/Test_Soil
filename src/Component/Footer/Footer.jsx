import React from 'react'
import footstyle from './Footer.module.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return <>
<div className={`${footstyle.contact}`}>
 <div className="row m-0 p-5 d-flex justify-content-between">
  <div className="col-md-4">
    <div className="content">
       <h3><Link className={` ${footstyle.text}`} to={'/About'}>About Us</Link></h3>
       <p className={`pt-3  w-75 ${footstyle.text}`}>Website for Soil Type Detection, want to Know more? click on About US</p>
    </div>
  </div>
 {/* <div className="col-md-4">
  <div className="content">
  <h3 className={` ${footstyle.text}`}> Get Updates</h3>
    <p className={`w-75 ${footstyle.text}`}>Subscribe to our newsletter to recieve Updates and special announcement</p>
    <div>
      <input type="email" placeholder="+Email" className='rounded-2'  />
    </div>
    <div className="input">
      <input type="text" placeholder="+First Name" className='rounded-2' />
      <button className={`btn ${footstyle.text}`}>Sign Up</button>
    </div>
  </div>
 </div> */}
 <div className="col-md-4">
  <div className="content">
 <h3 className={` ${footstyle.text} pe-3`}>Send Us a Message <i class="fa-solid fa-arrow-right-to-bracket"></i></h3>
    <div className="contact-icon pt-4 m-auto">
      <Link className={` ${footstyle.icons} fs-4`} ><i class="fa-brands fa-facebook"></i></Link>
      <Link className={` ${footstyle.icons} fs-4 ps-4`} ><i class="fa-brands fa-instagram"></i></Link>
      <Link className={` ${footstyle.icons} fs-4 ps-4`} ><i class="fa-brands fa-linkedin"></i></Link>
    </div>
  </div>
 </div>
 
 </div>
</div>

  </>
}
