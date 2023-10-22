import './contact.css';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters';


const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
                'service_10gnxs4',
                'contact_form',
                refForm.current,
                'ZoXbRuY_2qhCrbjUW'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Faild to send the message, please try again.')
                }
            )
    }

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer); 
        };
    }, []);

    return (
        
        <section id='contact'>
            <div className='text-zone'>
                <h2>
                    <AnimatedLetters
                        letterClass={`${letterClass} about-title`}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h2>
                <p className='contact-description'>
                I am actively seeking opportunities for personal and professional growth in the vibrant Stockholm area. 
                Please feel free to reach out to me through the contact form below or by sending an email to felicia.lordell@gmail.com. 
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul className='form-ul'>
                            <li className='half form-list'>
                                <input className='half' type="text" name="name" placeholder='Name' required />
                                <input className='half' type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li className='form-list'>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li className='form-list'>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li className='form-list'>
                                <input type="submit" className='flat-button submit-btn' value="SEND" />
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
            
        </section>
        
    )
}

export default Contact