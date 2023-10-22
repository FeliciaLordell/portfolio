import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'


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

    return (
        
        <section id='contact'>
            <div className='text-zone'>
                <h2 className='contact-title'>Contact me</h2>
                <p className='contact-description'>
                    I'm interested in opportunities to continue to grow. 
                    Please don't hesitate ro contact me using below form. 
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