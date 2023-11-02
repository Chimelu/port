import { Link, NavLink } from 'react-router-dom'
import './Index.scss'
import React from 'react'
import LogoC from '../../assets/C image.png'
import LogoSubtitle from '../../assets/Untitled Project (2).jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoC} alt="logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="logo" />

      </Link>
      <nav className=' row-lg gap-2 text-center  '>
        <NavLink exact='true' activeclassname='active' className='' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active'   className='about-link p' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active'  className='contact-link ' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active'  className='work-link ' to='/works'>
          <FontAwesomeIcon icon={faEye} color='#4d4d4e'/>
        </NavLink>
          
      </nav >
      <ul className=' '>
        <li>
          <a target='-bank' rel='noreferrer' href='https://www.linkedin.com/in/ezeoguine-chimelu-b5b258262'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>

          </a>
        </li>
        <li>
          <a target='-bank' rel='noreferrer' href='https://github.com/Chimelu'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>

          </a>
        </li>
        <li>
          <a target='-bank' rel='noreferrer' href=' https://whatsapp.com/dl/'>
            <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'/>

          </a>
        </li>
      </ul>
      {/* n */}
      
        
    </div>
  )
}

export default SideBar