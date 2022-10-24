import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillFilePersonFill} from 'react-icons/bs'
import {AiFillProfile} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {MdOutlineEmail} from 'react-icons/md'
import {useState} from 'react'
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BsFillFilePersonFill/></a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''} ><RiServiceFill/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} ><AiFillProfile/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><MdOutlineEmail/></a>
    </nav>
  )
}

export default Nav