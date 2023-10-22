import React from 'react'
import './projects.css'
import Mytrip from '../../assets/images/MyTrip.jpg'
import BookGen from '../../assets/images/bookgen.jpg'
import Netflix from '../../assets/images/portfolio-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import CSharp from '../../assets/images/csharp-logo.png'
import 'intersection-observer';
import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';


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

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
        clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, []);

  return (
    <section id="projects">
      <h2>
        <AnimatedLetters
          letterClass={`${letterClass} about-title`}
          strArray={['A', 'p', 'p', 's', ' ', "I'", 'v', 'e', ' ', 'b', 'u', 'i', 'l', 't']}
          idx={15}
        />
      </h2>
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
          <p>Coming soon... <br />BookGen is an innovative application designed to provide you with personalized book recommendations and a convenient book search feature. Google Books API is used to curate an extensive database of books.</p>
        
        </span>
      </div>
      <h2 className='projects-title techniqes-title'>
        <AnimatedLetters
          letterClass={`${letterClass} about-title`}
          strArray={['T', 'e', 'c', 'h', 'n', 'i', 'q', 'u', 'e', 's', ' ', "I'", 'v', 'e', ' ', 'u', 's', 'e', 'd']}
          idx={15}
        />
      </h2>
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
      
    </section>

  )
}

export default Projects
