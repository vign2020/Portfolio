import React from 'react'

import css from '../images/css.png'
import html from '../images/html.png'
import javascript from '../images/javascipt.png'
import react from '../images/react.png'

import nodejs from '../images/nodejs.png'
import mongo from '../images/mongo.jpg'


import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";



export default function TechStack() {
  return (
    <div className='tech-stack'>
        <h1>Tech stack</h1>
        <p>During the past three years of my coding journey, I have acquired proficiency in various technologies, frameworks, and languages, both through academic pursuits and self-driven learning. However, I have chosen to showcase only my most favored and proficient technologies.</p>
        <div className="images-tech-stack">


        <FaHtml5 size = {100}/>
        <FaCss3Alt size = {100}/>

        <IoLogoJavascript size = {100}/>
        <FaReact size = {100}/>
        
        <DiMongodb size = {100}/>
        <FaNodeJs size = {100}/>

        <TbBrandNextjs size = {100}/>
       





        </div>
      
      
    </div>
  )
}
