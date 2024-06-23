import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './imagenes/LOGO.png'

import { useAuth0 } from '@auth0/auth0-react'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const { loginWithRedirect } = useAuth0();

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={20} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>INICIO</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>QUIENES SOMOS</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>NUESTRO OBJETIVO</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about2' onClick={closeMenu}>CONTENIDO</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>CONTACTANOS</a>
                    </li>
                    {/* <button className='button' onClick={() => loginWithRedirect()}>INICIO</button> */}
                </ul>

              
            </nav>
        </div>
    )
}


export default Navbar
