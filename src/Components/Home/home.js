import React, { useEffect, useState } from 'react';
import './home.css';
import bg from '../../assets/images/illustrated-img.png';
import { Link } from 'react-scroll';
import AnimatedLetters from '../AnimatedLetters';


const Home = () => {
  
  const nameArray = [' ', 'F', 'e', 'l', 'i', 'c', 'i', 'a']
  const jobArray = ['F', 'u', 'l', 'l','-', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
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
      
      <section id='home'>
        <div className='home-content' >
          <div className='taxt-zone'>
            <span className={`${letterClass} hello`}>H</span>
            <span className={`${letterClass} _12 hello`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
 
            <AnimatedLetters className='home-name' letterClass={letterClass} strArray={nameArray} idx={15} />
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
            
            
            
            <p className='home-para'>I'm an ambitious and highly motivated individual with a profound passion 
                    for technology and a relentless drive for problem-solving.</p>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-90} duration={500} className='flat-button'>CONTACT ME</Link>
          </div>
        </div>
        <img src={bg} alt='Profile' className='bg' />
      </section>
        
    );
}

export default Home
