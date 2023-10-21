import React, { useEffect, useState } from 'react';
import './about.css'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import CSharp from '../../assets/images/csharp-logo.png'
import 'intersection-observer';

const About = () => {
const [letterClass, setLetterClass] = useState('text-animate');

useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
        clearTimeout(timer); // Clear the timer if the component unmounts
    };
}, []);


const observer1 = new IntersectionObserver((entries, observer1) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      } else {
        entry.target.style.animationPlayState = "paused";
      }
    });
  });

  document.querySelectorAll(".desc-para").forEach((element) => {
  observer1.observe(element);
});

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
    <section id='about'>
        <div className='text-zone'> 
            <h1>
                <AnimatedLetters
                    letterClass={`${letterClass} about-title`}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}

                />
            </h1>
            <div className='about-description'>
                <p className='desc-para'>I'm an ambitious and highly motivated individual with a profound passion 
                    for technology and a relentless drive for problem-solving. 
                    I'm not just a full-stack developer; I'm a creative at heart, 
                    always eager to bring new ideas to life. </p>
                <p className='desc-para'>In addition to my love for coding and creating web solutions, 
                    I find joy in crafting physical items as well. 
                    Whether it's knitting intricate patterns, crocheting unique designs, 
                    or restoring furniture to its former glory, I thrive on the art of making. 
                    This same creative spirit that fuels my hands-on projects also powers my web development work.</p>
                <p className='desc-para'>My diverse set of skills and hobbies have taught me the 
                    importance of attention to detail, patience, and adaptability. 
                    I believe that each project, whether it's a software application 
                    or a handmade piece, is an opportunity to learn and grow. 
                    I'm excited about the endless possibilities that technology and 
                    creativity can offer, and I'm determined to bring my best to 
                    every challenge I encounter.</p>
            </div>

        </div>
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

export default About
