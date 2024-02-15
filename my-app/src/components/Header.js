import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

import image1 from '../images/git-hub.jpeg'
import image2 from '../images/html.png'
import photo2 from '../images/photo2.jpeg'

export default function () {
  return (
    <div className='Header-main-container'>
      <div className="title-about-image-wrapper">

   
        <div className="title-about">
        <h1 className='title'>Full stack Developer</h1>

<h3>👋 Hello there! I'm Vignesh , a passionate Front-End Developer with a knack for crafting captivating web experiences.I am a senior year student from Vellore Institute of technology, Chennai majoring in computer science.</h3>

        </div>
      
        <div className="image-container">
          <picture>
            <source media='(max-width : 500px)' srcSet={image1} style={{'width' : '30px' , 'height' : '30px' }}/>
              <img src={image1} className='image' style={{'width' : '300px' , 'height' : '300px' }}/>
          </picture>
           
        </div>
        </div>
       
        
        <div className="resume-wrapper">
        
            <button className='hire'><Link to="contact" smooth={true} duration={200}>Hire me</Link></button>
        </div>

    </div>
  )
}
