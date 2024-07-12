import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Getstart() {
    const customFontStyle = {
        fontFamily: 'Bowlby One SC, sans-serif',
      };
    
  return (
       
    <div className='d-flex mt-3 align-items-center justify-content-center'>
    <div className='bg-white m-5 width rounded-4 height d-flex justify-content-evenly align-items-center flex-row p-2'>
      <div className=" m-5 ">
          <h4 className='welcome' >Welcome to </h4>
          {/* <h1 className='welcome text-center p-4 soill' > Soil Type Detection</h1> */}
          <img src="images/Soil Type.png" className='d-flex justify-content-center align-items-center p-5' alt="" />
            <div className='d-flex justify-content-center align-items-center'>
            <button className='btn '><Link className='text-decoration-none text-white' to="/Login">Get Start</Link></button>

            </div>
          </div>
          <div className=''>
      <img src="images/soillalss.JPG" alt="" className='rounded-4' />
  </div>
  </div>
 
</div>
  )
}
