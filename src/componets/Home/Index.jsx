import React, { useEffect, useState } from 'react'
import Clogo from '../../assets/C image.png'
import { Link } from 'react-router-dom'
import './Index.scss'
import Button from 'react-bootstrap/Button';
import AnimatedLetters from '../Animated/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithub, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


// 'h','i','m','e','l','u'
const Home = () => {
  const [letterClass, setLetterClass]= useState('text-animate')
  const nameArray = ['h','i','m','e','l','u']
  const jobArray = ['W','e','b','','D','e','v','e','l','o','p','e','r',' ','Node Js', '/ React Js']
  const jobTitle = ['w','e','b','','d','e','v','e','l','o','p','e','r']
  useEffect(()=>{
     setTimeout(()=>{

      setLetterClass('text-animate-hover')
    },4000)
    
  },[])
  return (
    <div className='containerr home-page'>

      
      <div className='text-zone'>
       
        
         <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
       
        <img src={Clogo} alt="webdev" className='' /> <span className='c'>C</span><AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/> 
        </h1><br /><h1><AnimatedLetters letterClass={letterClass} strArray={jobTitle} idx={15}/> </h1>
        <h2 className='mt-3 fs-5'><AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/> </h2>
        <div className='d-flex'>

        <Link to='./contact' >
        <Button className='mt-4 flat-button' variant="outline-danger">CONTACT ME</Button>{' '}

        </Link>
        <Link to='./works' >
        <Button className='mt-4 mx-3 fw-bold text-light flat-button' variant="outline-danger">My Works </Button>{' '}

        </Link>
        </div>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faBootstrap} color='blue'/>
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faReact} color='gray'/>
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faNodeJs} color='green'/>
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGithub} color='black'/>
          </div>

        </div>

      </div>
      

      <Loader type='pacman'/>
      

    </div>
  )
}

export default Home