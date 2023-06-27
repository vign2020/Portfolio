import React from 'react'

import image1 from '../images/git-hub.jpeg'
export default function () {
  return (
    <div className='Header-main-container'>
        <div className="title-about">
        <h1 className='title'>Front End Developer</h1>

<h2>👋 Hello there! I'm Vignesh , a passionate Front-End Developer with a knack for crafting captivating web experiences.</h2>
        </div>
      
        <div className="image">
            <img src={image1} height={500} width={450}/>
        </div>
       
        
        <div className="resume-wrapper">
            <button className="download">Download my resume</button>
            <button className='hire'>hire me</button>
        </div>

    </div>
  )
}
