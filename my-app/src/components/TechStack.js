import React from 'react'

import css from '../images/css.png'
import html from '../images/html.png'
import javascript from '../images/javascipt.png'
import react from '../images/react.png'

import nodejs from '../images/nodejs.png'
import mongo from '../images/mongo.jpg'

export default function TechStack() {
  return (
    <div className='tech-stack'>
        <h1>Tech stack</h1>
        <div className="images-tech-stack">

        <img src={html} height={100} width={100}/>
        <img src={css} height={100} width={100}/>
        <img src={javascript} height={100} width={100} />
        <img src={react} height={100} width={100}/>
        <img src={mongo} height={100} width={100}/>
        <img src={nodejs} height={100} width={100}/>
        </div>
      
      
    </div>
  )
}
