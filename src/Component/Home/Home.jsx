import React from 'react'
import { Link } from 'react-router-dom'
import hstyle from './Home.module.css'
export default function Home() {
  return <>
  <div className='container'>
   <div className={`content d-flex align-items-center justify-content-center flex-wrap mt-5 `}>
     <h3 className={`text-center mt-5 ${hstyle.h22}`}>The soil speaks its own language, and with the right tools, we can decipher its composition and understand its story.</h3>
     <Link className={`  ${hstyle.btn} bg-success p-2 mt-4`} to="/Identify">Identify Soil</Link>
   </div>
  
   {/* <div className="row d-flex  align-items-center justify-content-center">
    <div className="col-md-4">
        <div className="conten  ">
            <img src="images/soil.jpg" className='w-100 rounded-2 mt-5' alt="" />
            
        </div>
    </div>
    <div className="col-md-4">
        <div className="conten mt-5 ">
            <img src="images/download.jpg" className='w-100 rounded-2 mt-5' alt="" />
            <p className={`${hstyle.pp}`}>"Know your soil and nurture your plants, for understanding the ground beneath your feet is the key to helping your garden grow"</p>
        </div>
    </div>
   </div> */}

  </div>
  <div className={`${hstyle.image} `}>
     <img src="images/Monstera.png" className={`${hstyle.imm}`}  alt="" />
   </div>
  
  </>
}
