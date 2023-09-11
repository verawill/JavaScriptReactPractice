import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/cap.PNG'
import IMG2 from '../../assets/NasaPhotoOfMeExplaining.jpg'
import IMG3 from '../../assets/r0deaLYi_400x400.jpg'
import IMG4 from '../../assets/Hackathon.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="NASA project" />
          </div>
          <h3>Nasa Funded Research</h3>
          <h4>In this project I was tasked to lead an investigation to find
            the most optimal mechanism to create a nano bot that is smaller than a penny to jump higher
            than its size. I was funded by UW and NASA to help publish a paper which is expected to be
            published by end of September.
          </h4>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1cD3Ytm3lNdqcu6NHsisGSpDYx2rkHkUe/view" 
          className = 'btn' target = '_blank'>FinishedNanobot</a>
          <a href="https://www.waspacegrant.org/wordpress/wp-content/uploads/2023/08/Fleabot-Poster1024_1.jpg" 
          className = 'btn btn-primary' target = '_blank'>Poster link</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="NASA project" />
          </div>
          <h3>Embedded Systems project</h3>
          <h4> This was a partner based project that implemented tasks on the RT-OS and developing a creative project using an embedded system.
            We were able to produce a tune, use a numpad to display contents on LED display and have an exteranl LED play with the rythem of the tune.
          </h4>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1o_E-OWMTmtWaSByQD2tRQQIRZNmQtAqI/view" className = 'btn' target = '_blank'>Live demo Video</a>

          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="NASA project" />
          </div>
          <h3>UW Hackathon 2022</h3>
          <h4>I participated in a hackathon with 2 other of my peers. 
            I was responsible for the React components, HTML, CSS, JavaScript and creating a 
            figma with our design and ideas.  We created a volunteer opportunity seeker,
             a website that would search for volunteer opportunities and made it fun with social media elements.
          </h4>
          <h4>Given only a 24hr time constraint, we had to rush out features and 
            learn on the spot to get a working prototype for judges.Working collaboratively and asking questions among each other was crucial to this project. 
            We divided up work yet helped each other out on parts whenever we got stuck </h4>
          <div className="portfolio__item-cta">
          <a href="https://github.com/MatthewS-1/DubHacks2022" className = 'btn' target = '_blank'>Github</a>
          </div>
        </article>

        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="NASA project" />
          </div>
          <h3>Sales consultant</h3>
          <h4>When I worked with Calicos as a sales consultant I was given 
            a portion of members subscribitions of $50 a month to provide
            8%-10.5% increase in profits for members. As well helped
            and encouraged members budget business expenses giving talks 
            and presentations.
          </h4>
          <div className="portfolio__item-cta">
          </div>
        </article>


 
      </div>
    
    </section>
  )
}

export default Portfolio