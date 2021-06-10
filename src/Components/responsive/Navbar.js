import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {setUser} from '.../redux/authReducer.js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const logout = () => {
    axios.delete("/auth/logout")
    .then( res => {
        props.setUser(null)
        props.history.push('/auth')
    }).catch( err => {
        console.log(err)
        alert("There was an issue logging out. Please try again.")
    })
     
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Checka.Clay
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/design'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Design
              </Link>
            </li>
            <li className='nav-item'>
                {props.auth.user ?<li className = 'logout' onClick={logout}>Log out</li> 
                :
                <Link to='/auth'>Sign In</Link> }                  
            </li>

            <li>
              <Link
                to='/cart'
                className='nav-links'
                onClick={closeMobileMenu}>
                <i class="fas fa-shopping-bag"/> 
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {setUser})(Navbar));


