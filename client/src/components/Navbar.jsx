import Logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className="logo">
          < img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
        
          <Link className='link' to='/?cat=science'>
            <h6>SCIENCE</h6>
          </Link>
        
          <Link className='link' to='/?technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
        
          <Link className='link' to='/?cinema'>
            <h6>CINEMA</h6>
          </Link>

          <Link className='link' to='/?cat=design'>
            <h6>DESIGN</h6>
          </Link>

          <Link className='link' to='/?cat=food'>
            <h6>FOOD</h6>
          </Link>
        </div>
        <span>John</span>
        <span>Logout</span>
        <span className='write'>
          <Link to="/write">Write</Link>
        </span>


      </div>
    </div>  
  )
}

export default Navbar