import React from 'react'

import Login from './Login';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username' />
        <input required type="email" placeholder='email'/>  
        <input required  type='password' placeholder='password'/>
        <p>There is an error</p>
        <span>Already a user? <Link to ='/login '>Login</Link></span>
        <button>Register</button>
      </form> 
    </div>
  )
}

export default Register