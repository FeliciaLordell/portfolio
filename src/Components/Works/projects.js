import React from 'react'
import './projects.css'
import Mytrip from '../../assets/images/MyTrip.jpg'
import BookGen from '../../assets/images/bookgen.jpg'
import Netflix from '../../assets/images/portfolio-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import CSharp from '../../assets/images/csharp-logo.png'
import 'intersection-observer';


const Projects = () => {
  const observer2 = new IntersectionObserver((entries, observer2) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      } else {
        entry.target.style.animationPlayState = "paused";
      }
    });
  });

    document.querySelectorAll(".face").forEach((element) => {
    observer2.observe(element);
  });

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
        <h2 className='projects-title techniqes-title'>Techniques I've used</h2>
        <div className='stage-cube-cont'>
                <div className='face'>
                    <img className='icons-img' src={CSharp} alt='C sharp icon'/>
                    <p style={{color: "#803788"}}>C#</p>
                </div>
                <div className='face'>
                    <FontAwesomeIcon className='icons' icon={faJsSquare} color="#EFD81D" />                        
                    <p style={{color: "#EFD81D"}} >JavaScript</p>
                </div>
                <div className='face'>
                    <FontAwesomeIcon className='icons' icon={faReact} color="#5ED4F4" />
                    <p style={{color: "#5ED4F4"}}>React</p>
                </div>
                <div className='face'>
                    <FontAwesomeIcon className='icons' icon={faHtml5} color="#F06529" />                        
                    <p style={{color: "#F06529" }}>HTML</p>
                </div>
                <div className='face'>
                    <FontAwesomeIcon className='icons' icon={faCss3} color="#28A4D9" />                        
                    <p style={{color: "#28A4D9"}}>CSS</p>
                </div>
                <div className='face'>
                    <FontAwesomeIcon className='icons' icon={faGitAlt} color="#EC4D28" />
                    <p style={{color: "#EC4D28"}}>Git</p>
                </div>
                
        </div>
      {/* </div> */}
    </section>

  )
}

export default Projects
