import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(true);

  function sendDataToApi(values) {
    setLoading(false);
    axios.post('https://gp-rb8c.onrender.com/login', values).then(({ data }) => {
      console.log(data);
      console.log(data.message);
      if (data.message === 'Done') {
        localStorage.setItem("token", data.token);
        navigate('/Home');
      }
    }).catch(err => {
      setErrMsg(err.response.data.message);
      setLoading(true);
      console.log(err.response.data.message);
    });
  }

  async function forgetPassword(event) {
    event.preventDefault(); // Prevent default link behavior
    const email = login.values.email; // Extract email value from form state
    try {
      setLoading(false);
      const response = await axios.post('https://gp-rb8c.onrender.com/forgetpassword', {
        email: email // Send email in the request body
      });
      console.log("email is sent",response.data); // You can handle the response as per your requirements
      setLoading(true);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  }

  function validationSchema() {
    let errors = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    });
    return errors;
  }

  let login = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      sendDataToApi(values);
    }
  });

  console.log(login.errors);

  return (
    <div className='d-flex mt-3 align-items-center justify-content-center'>
      <div className='bg-white m-5 width rounded-4 height d-flex justify-content-between align-items-center flex-row p-3'>
        <div className="m-5">
          <h2 className='text-center'>Sign in </h2>
          <form onSubmit={login.handleSubmit} className='d-flex justify-content-center flex-column align-items-center'>
            <input onBlur={login.handleBlur} value={login.values.email} onChange={login.handleChange} className='form-control mb-3 mt-4 w-100'
              type="email" name='email' placeholder='Enter your Email :' />
            {login.errors.email && login.touched.email ? <div className="alert alert-danger">{login.errors.email}</div> : ''}

            <input onBlur={login.handleBlur} value={login.values.password} onChange={login.handleChange} className='form-control mb-3 mt-4 w-100'
              type="password" name='password' placeholder='Enter your password :' />
            {login.errors.password && login.touched.password ? <div className="alert alert-danger">{login.errors.password}</div> : ''}

            <Link onClick={forgetPassword} className='text-decoration-none text-success'>
              <h6 className='mt-1'>Forgot Password?</h6>
            </Link>

            {errMsg ? <div className="alert alert-danger">
              {errMsg}
            </div> : ''}

            <button disabled={!(login.isValid && login.dirty)} type='submit' className='btn text-white w-50'>
              {loading ? 'Login' : <i className='fa fa-spinner fa-spin'></i>}
            </button>
            <p className='mt-2'>Create account? <Link className='text-decoration-none text-success' to="/SignUp">SignUp</Link></p>
          </form>
        </div>
        <div className='m-2 '>
          <img src="images/soillalss.JPG" alt="" className='rounded-4' />
        </div>
      </div>
    </div>
  );
}
