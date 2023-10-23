import React, { useState } from 'react';
import './navbar.css';
import logo from "../../assets/images/logo-name-green.png"
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import BurgerMenu from '../../assets/images/bars-solid.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='nav-menu'>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} className='nav-menu-list-item'>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} className='nav-menu-list-item'>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-70} duration={500} className='nav-menu-list-item'>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='nav-menu-list-item'>Contact</Link>
        </div>
        <ul>
            <li className='nav-menu-links'>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/felicia-lordell-559ba01a9/"
                >
                    <FontAwesomeIcon className='nav-menu-icons' icon={faLinkedin} color="#2D5E14" />
                </a>
            </li>
            <li className='nav-menu-links'>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/FeliciaLordell"
                >
                    <FontAwesomeIcon className='nav-menu-icons' icon={faGithub} color="#2D5E14" />
                </a>
            </li>
        </ul>

        <FontAwesomeIcon icon={faBars} style={{color: "#2d5e14",}} className='burger-menu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='burger-menu-nav' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} className='burger-menu-list-item' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} className='burger-menu-list-item' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-70} duration={500} className='burger-menu-list-item' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='burger-menu-list-item' onClick={()=>setShowMenu(false)}>Contact</Link>
            <a target="_blank" href='https://www.linkedin.com/in/felicia-lordell-559ba01a9/' className='burger-menu-list-item' onClick={()=>setShowMenu(false)}>LinkedIn</a>
            <a target="_blank" href='https://github.com/FeliciaLordell' className='burger-menu-list-item' onClick={()=>setShowMenu(false)}>GitHub</a>

        </div>
    </nav>
  )
}

export default Navbar

