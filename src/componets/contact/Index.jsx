import React, { useEffect, useState,useRef } from 'react'
import './Index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../Animated/Index'
import emailjs from '@emailjs/browser';
const Contact = () => {

    
    const [letterClass, setLetterClass]= useState('text-animate')
    
    useEffect(()=>{
       setTimeout(()=>{
  
        setLetterClass('text-animate-hover')
      },3000)
      
    },[])

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'react-contact-details',
        'React-contact-form',
        form.current,
       'oVzCj2W-CIXuE5obd'
      )
      .then(
        (result) => {
          alert('message sent successfully...')
          ;
          window.location.reload(false)
          console.log(result.text);
        },
        (error) => {
            alert('Failed to send message..')
          ;
          console.log(error.text);
        }
      );
  }
  return (
    <>
    <div className='containerr contact-page'>
    <div className='text-zone'>
        <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t','','m','e']} idx={15}/>
        </h1>
        <p>I'm a full-stack web designer ready to bring your online vision to life. Let's collaborate on your project, from front-end aesthetics to back-end functionality. Reach out today to discuss your web design needs.</p>
        <div className='contact-form'>
            <form className='cf' ref={form} onSubmit={sendEmail}> 
                <ul>
                    <div className='d-flex gap-3 '>

                    <li>
                        <input type='text' name='user-name' placeholder='Name' required/>
                    </li>
                    <li>
                        <input type='email' name='user-email' placeholder='Email' required/>
                    </li>
                    </div>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required/>
                    </li>
                    <li>
                        <textarea placeholder='Message'
                        name='message'
                        required>

                        </textarea>
                    </li>
                    <li className='text-center  ' >
                        <input type='submit'
                        value='SEND' className='btn btn-md fs-3'/>
                    </li>
                </ul>
            </form>

        </div>

    </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Contact