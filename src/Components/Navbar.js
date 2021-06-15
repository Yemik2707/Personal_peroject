import React, { useState } from 'react'
import Signin from './Signin'
import Products from'./Products'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)


  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/products' className='navbar-logo' onClick={closeMobileMenu}>
            Cheka.Clay
   
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
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Signin closeMobileMenu={closeMobileMenu} />
            </li>
          
            <li className='nav-item'>
              <Link
                to='/cart'
                className='nav-links'
                onClick= {closeMobileMenu}
                >
                <i class="fas fa-shopping-bag"/>
              </Link>
              
            </li>
          
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;

