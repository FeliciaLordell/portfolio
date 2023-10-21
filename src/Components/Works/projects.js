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
            <p>MyTrip is a group project that we worked on at Brights Learning. We created an application where you can plan your travels and save it in your personal itinerary. LINQ had a very central roloe in this application to join the data from the different tables. </p>
            <div className='git-btn'><a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/FeliciaLordell/MyTripMVC"
            >
              <FontAwesomeIcon className='nav-menu-icons' icon={faGithub} color="#2D5E14" />
            </a>
            </div>
         </span>
          <span>
            <img src={Netflix} alt='netflix replica' className='works-img'/>
            <h4>Portfolio</h4>
            <p>To build this portfolio I'v used React, JS, SASS, CSS and HTML. </p>
          </span>
          <span>
            <img src={BookGen} alt='bookgen' className='works-img'/>
            <h4>BookGen</h4>
            <p>Coming soon... <br />BookGen is an application where you can generate book suggestions, search for books. I user Google Books API to gather all data. </p>
            <div className='git-btn'><a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/FeliciaLordell/BookGen"
            >
              <FontAwesomeIcon className='nav-menu-icons' icon={faGithub} color="#2D5E14" />
            </a>
            </div>
          </span>
        </div>
      {/* </div> */}
    </section>

  )
}

export default Projects
