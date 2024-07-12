import React from 'react'
import Aboutstyle from './About.module.css'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
     <div className={`${Aboutstyle.main} `}>
      <div className="container ">
        <div className="row ">
          <div className="col-md-8">
          <div className="main-text mt-5 p-5">
           {/* <h1 className={`${Aboutstyle.maintext}`} >ABOUT US</h1> */}
         <p className={`${Aboutstyle.maintextp} mb-5`}>This website to help you knowing the soils type, and be able to know which plant is suitable for this soil.
            </p>

            <p className={`${Aboutstyle.maintextp}`}>Follow this steps to use our website:</p>

    <ul className="steps"> 
      <li className={`${Aboutstyle.stepsli}`}>1- Click on identify soil at <Link className={`${Aboutstyle.home} text-decoration-none`} to="/Home">Home</Link> page.</li>
      <li className={`${Aboutstyle.stepsli}`}>2- Upload image you want.</li>
      <li className={`${Aboutstyle.stepsli}`}>3-Click on identify.</li>
    </ul>
    <p className={`${Aboutstyle.maintextp} text-center`}>Then the result of your soil type will appear</p>
  </div>
          </div>
          <div className="col-md-4">
          <div className="main-image">
    <img src="images/p6.png" className='w-75 mt-5 ' alt />
  </div>
          </div>
        </div>
      </div>
  
</div>

    
    </>
  )
}
