import React from 'react'
import './header.css'
import CTA from './CTA'
import Will from '../../assets/IMG-0345.png'
import WillTra from '../../assets/WillTransparents.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>William Vera Rincon</h1>
        <h5 className="text-light">University of Washington CSE Student</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img className="img-one" src={Will} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      </header>
  )
}

export default Header