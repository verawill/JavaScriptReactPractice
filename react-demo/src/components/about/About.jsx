import React from 'react'
import './about.css'
import ME from '../../assets/IMG-0345.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {VscGraphLine} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
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
              <h5>CS Experience</h5>
              <small>5+ years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clubs</h5>
              <small><a href="http://students.washington.edu/avelauw/index.html">AVELA</a> & </small>
              <small><a href="https://shpe.org/">SHPE</a> & </small>
              <small><a href="https://gen1.cs.washington.edu/">1GEN</a></small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Nasa funded Researcher</h5>
              <small>Paper being published soon</small>
            </article>
            <article className='about__card'>
              <VscGraphLine className='about__icon' />
              <h5>Business Owner</h5>
              <small>Consulting and reselling services</small>
            </article>
          </div>
          <div className="about__me-words">
          <p>
          Hello, I am a passionate Computer Science student at the University of Washington, currently set to graduate in March 2024 as a first generation student.
          With a strong academic foundation in software design, algorithms, public speaking, and embedded systems, 
          I am driven by a deep commitment to both technical excellence and community engagement. My interests are currently the gym, relaxing
          with family, and running my side hustle reselling shoes and clothing.
          </p>
          <p>
          Currently I work with AVELA and SHPE to provide STEM education to underrepresented communities in the Western side of Washington.
          AVELA is a nonprofit organization ran by University of Washington students that dedicates its resources to bring education 
          to classrooms who may not have access to STEM programs. Currently, 
          I’m an active student teacher who focuses on programming and encouraging students to explore a path at college by providing 
          resources through powerpoint slides.
          </p>
          <p>As I come to the end of my academic career at the University of Washington I am actively pursing an opportunity at a company 
            that will align with my interests and provide me an opportunity to display my computer science abilities.</p>
          {/* <a href="#contact" className ='btn btn-primary'>Contact</a> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About