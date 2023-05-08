import React from 'react'

import Register from './Register';
import {Link} from 'react-router-dom';

// var Link = require('react-router').Link

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password'/>
        <p>There is an error</p>
        <span>New user? <Link to ='/register'>Register</Link></span>
        <button>Login</button>
      </form> 
    </div>
  )
}

export default Login