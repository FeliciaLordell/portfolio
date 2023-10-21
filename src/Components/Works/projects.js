import React from 'react'
import './projects.css'
import Mytrip from '../../assets/images/MyTrip.jpg'
import BookGen from '../../assets/images/bookgen.jpg'
import Netflix from '../../assets/images/portfolio-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
  return (
    <section id="projects">
      {/* <div className='text-zone'> */}
        <h2 className='projects-title'>Apps I've built</h2>
        <div className='projects-imgs'>
          <span>
            <img src={Mytrip} alt='Mytrip' className='works-img'/>
            <h4>MyTrip</h4>
            <p>MyTrip is a collaborative project we undertook at Brights Learning. Our team developed an innovative application designed for travel planning and personal itinerary management.</p>
            <a className='git-btn'
              target="_blank"
              rel="noreferrer"
              href="https://github.com/FeliciaLordell/MyTripMVC"
            >
              <FontAwesomeIcon className='git-icon' icon={faGithub} color="#2D5E14" />
              VIEW CODE
            </a>
         </span>
          <span>
            <img src={Netflix} alt='netflix replica' className='works-img'/>
            <h4>Portfolio</h4>
            <p>I've created this portfolio to showcase my projects, and I've built it using a combination of technologies, including React, JavaScript, SASS, CSS, and HTML.</p>
            <a className='git-btn'
              target="_blank"
              rel="noreferrer"
              href="https://github.com/FeliciaLordell/portfolio"
            >
                <FontAwesomeIcon className='git-icon' icon={faGithub} color="#2D5E14" />
                VIEW CODE
            </a>
          </span>
          <span>
            <img src={BookGen} alt='bookgen' className='works-img'/>
            <h4>BookGen</h4>
            <p>Coming soon... <br />BookGen is an application where you can generate book suggestions, search for books. I user Google Books API to gather all data. </p>
         
          </span>
        </div>
      {/* </div> */}
    </section>

  )
}

export default Projects
