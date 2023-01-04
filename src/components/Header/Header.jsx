import React from 'react'
import {Link} from 'react-scroll';
import logo from './Group 1.svg'
import './header.css'



const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo} alt='' />
        </div>
        <div className='header__right'>
        <Link to='home' smooth={true} duration={500} >
            <h4>Home</h4>
            </Link>
            <Link to='about' smooth={true} duration={500} >
            <h4>AboutUs</h4>
            </Link>

            <Link to='ip' smooth={true} duration={500} >
            <h4>Industry Practices</h4>
            </Link>

            <Link to='jobs' smooth={true} duration={500} >
            <h4>Jobs</h4>
            </Link>

            <Link to='is' smooth={true} duration={500} >
            <h4>Insights</h4>
            </Link>

            <Link to='footer' smooth={true} duration={500} >
            <h4>Contact us</h4>
            </Link>

            

            

            
            
        </div>
      
    </div>
  )
}

export default Header