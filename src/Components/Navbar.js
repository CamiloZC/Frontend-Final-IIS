import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/fibonacci' className='nav-links' onClick={closeMobileMenu}>
                Fibonacci
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/factorial'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Factorial
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/triangulo'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Triángulo
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/circulo'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Círculo
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/rectangulo'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rectángulo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;