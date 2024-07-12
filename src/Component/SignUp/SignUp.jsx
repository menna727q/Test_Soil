
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {


let navigate= useNavigate()
let [errMsg,setErrMsg]=useState('')
const [loading,setLoading]=useState(true)

     function sendDataToApi(values){
        setLoading(false)
       axios.post('https://gp-rb8c.onrender.com/adduser',values).then(({data})=>{
        console.log(data);
        if(data.message=='Done'){
            navigate('/Login')
        }
       }).catch(err=>{
        setErrMsg(err.response.data.message)
        setLoading(true)
        console.log(err.response.data.message);
       })
      
    }

function validationSchema() {
    let errors = Yup.object({
        name: Yup.string().min(2).max(20).required(),
        email: Yup.string().email().required(),
        password: Yup.string().matches(/^[A-Z][a-zA-Z0-9]{6,}$/).required(),
        cPassword: Yup.string().oneOf([Yup.ref('password')])
    })
    return errors
}

    let register = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            cPassword: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            sendDataToApi(values);
     
        }
    })
    console.log(register.errors)
    return (
        <div className='d-flex mt-3 align-items-center justify-content-center'>
          <div className='bg-white m-5  rounded-4 width d-flex flex-row justify-content-between align-items-center p-3'>
          <div className=" m-4 ">
          <h2 className='text-center'>Signup </h2>
                <form onSubmit={register.handleSubmit} className='d-flex justify-content-center flex-column align-items-center '>
                    {/* <label htmlFor="Name">Name:</label> */}
                    <input onBlur={register.handleBlur} value={register.values.name} onChange={register.handleChange} className='form-control mb-2 mt-4' 
                            type="text" name='name' placeholder='Enter your userName :' id='Name' />
                            {register.errors.name && register.touched.name ?<div className="alert alert-danger">{register.errors.name}</div>: ''}
                    
                    {/* <label htmlFor="Email">Email:</label> */}
                    <input onBlur={register.handleBlur} value={register.values.email} onChange={register.handleChange} className='form-control mb-2 mt-4'
                        type="email" name='email' placeholder='Enter your Email :' />
                        {register.errors.email && register.touched.email?<div className="alert alert-danger">{register.errors.email}</div>: ''}
                    
                    {/* <label htmlFor="Password">Password:</label> */}
                    <input onBlur={register.handleBlur} value={register.values.password} onChange={register.handleChange} className='form-control mb-2 mt-4' 
                     type="password"  name='password'placeholder='Enter your password :' />
                     {register.errors.password && register.touched.password ?<div className="alert alert-danger">{register.errors.password}</div>: ''}
                    
                    {/* <label htmlFor="Repassword">Repassword:</label> */}
                    <input onBlur={register.handleBlur} value={register.values.cPassword} onChange={register.handleChange} className='form-control mb-3 mt-4'
                      type="password" name='cPassword'placeholder='cPassword :' />
                      {register.errors.cPassword && register.touched.cPassword?<div className="alert alert-danger">{register.errors.cPassword}</div>: ''}
                     
                    {errMsg?  <div className="alert alert-danger">
                        {errMsg}
                     </div>:''}

                    <button disabled={!(register.isValid&&register.dirty)} type='submit' className='btn  text-white'>
                    {loading?'SignUp':<i className='fa fa-spinner fa-spin'></i>}
                    </button>
                    <p className='mt-2'>Already have account? <Link className='text-decoration-none text-success' to="/Login">Login</Link></p>

                </form>
            </div>
            <div >
            <img src="images/soillalss.JPG" alt="" className='rounded-4' />
        </div>

        </div>
       
       </div>
    )
}
