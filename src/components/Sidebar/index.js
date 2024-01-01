import LogoS from '../../assets/images/leicester.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faBars,
    faUser,
    faEnvelope,
    faAddressCard,
    faChalkboardTeacher,
    faNoteSticky,
    faClose
  } from '@fortawesome/free-solid-svg-icons'

  import {
    faLinkedin,
    faGithub
  } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link 
            className="logo"
            to="/"
            onClick={() => setShowNav(false)}>
            <img src={LogoS} alt="Logo" />
      </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
            onClick={() => setShowNav(false)}
            exact="true" 
            activeclassname="active" 
            to="/"
        >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
            onClick={() => setShowNav(false)}
            exact="true" 
            className="about-link"
            activeclassname="active" 
            to="/about"
        >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink 
            onClick={() => setShowNav(false)}
            exact="true" 
            activeclassname="active" 
            to="/catalog" 
            className="portfolio-link">
            <FontAwesomeIcon icon={faAddressCard} color="#4d4d4e" />
        </NavLink>
        <NavLink 
            onClick={() => setShowNav(false)}
            exact="true" 
            activeclassname="active" 
            to="/teaching" 
            className="teaching-link">
            <FontAwesomeIcon icon={faChalkboardTeacher} color="#4d4d4e" />
        </NavLink>
        <NavLink 
            onClick={() => setShowNav(false)}
            exact="true" 
            activeclassname="active" 
            to="/contact" 
            className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size='3x'
            className='close-icon'
        />
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://drive.google.com/file/d/11Nt9khYLthXDX3utcQIVABhzWVuIM7lD/view?usp=sharing"
                >
                    <FontAwesomeIcon icon={faNoteSticky} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.linkedin.com/in/riadmukhtarov"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://github.com/r14dd"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size='3x'
            className='hamburger-icon'
        />
    </div>
    )
}

export default Sidebar