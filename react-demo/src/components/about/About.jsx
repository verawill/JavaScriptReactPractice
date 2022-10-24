import React from 'react'
import './about.css'
import ME from '../../assets/sticker.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To know a little </h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Client</h5>
              <small>All of them</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80 completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laudantium obcaecati omnis sequi eum sunt animi temporibus facilis aspernatur, 
            dolorum impedit eligendi repellendus molestias magni exercitationem voluptatibus? 
            Ex aspernatur exercitationem facere?
          </p>
          <a href="#contact" className ='btn btn-primary'>Contact</a>
        </div>

      </div>
    </section>
  )
}

export default About