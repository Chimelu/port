import React  from 'react'
import AnimatedLetters from '../Animated/Index'
import me from '../../assets/WhatsApp Image 2023-09-23 at 10.33.06 AM.jpeg'
import './Index.scss'
import { useState,useEffect } from 'react'
import Loader from 'react-loaders'



const About = () => {
  
  
  const [letterClass, setLetterClass]= useState('text-animate')
  useEffect(()=>{
    setTimeout(()=>{

     setLetterClass('text-animate-hover')
   },3000)
   
 },[])
  return (
    <>
    <div className='containerr about-page'>
      <div className='text-zone'>
        <h1 className='my-3'>
          <AnimatedLetters strArray={['A','b','o','u','t',' ','m','e','😊',]} idx={15} letterClass={letterClass}/>
        </h1>
        <div className='p-tag'>

        <p>I'm an enthusiastic and highly motivated tech junior developer. I'm passionate about creating innovative web applications and am always eager to explore and learn new programming languages and technologies. My journey in tech has taught me the importance of adaptability and continuous learning, which I embrace wholeheartedly.</p>
        <p>I'm ready and excited to contribute my skills and dedication to a dynamic team and make a positive impact. With a natural curiosity and a commitment to excellence,  I believe that the ever-evolving tech world offers endless possibilities, and I'm determined to explore them.</p>
        <p>Let's connect and create something amazing together!

        </p>
        <a href="https://docs.google.com/document/d/1wZNPUx8iRyg5JcUvPvHoS0wm0d-7_NivPnOfa-SqZBI/edit?usp=drive_link" className='fs-3 text-dark'> Link to my resume</a>
        </div>
        

      </div>
      <div className='me'>
        <img src={me} alt="" className='img-fluid  me ' />
      </div>
      
       
    </div>
    <Loader type='pacman'/>
    </>
    
  )
}

export default About