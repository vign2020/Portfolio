import React from 'react'
import projects1 from '../images/projects1.png'
import roomrentals from '../images/room-rentals.png'

import { FaCode } from 'react-icons/fa';


export default function Projects() {
  return (
    <div className='projects-wrapper'>
        <h1>Projects</h1>
        <div className="project1">
            <div className="project-title">
                <h1>Sorting-algorithms-using-react-hooks</h1>
                <h3>visualize sorting algorithms at one place</h3>
                <a href="https://github.com/vign2020/Sorting-algorithms-using-react-hooks"><span class="link"><FaCode style={{ fontSize: '34px' }} /></span>gihub link</a>
           
            </div>
           
            <p>Sorting algorithsm can be fun when visualized!!! that is exactly what i have done in this project.
            This project aims at visualizing various sorting algorithms mainly uses useeffect to create side effects everytime the array is getting sorted. 
            </p>
            <img src={projects1} height={300} width={300}/>
        </div>

        <div className="project2">
        <div className="project-title-2">
                <h1>Room-booking.com</h1>
                <h3>Make your travel a lifelong memory...</h3>
                <a href="https://github.com/vign2020/room-rentals"><span class="link"><FaCode style={{ fontSize: '34px' }} /></span>gihub link</a>
            </div>
          
            <p>
                Built using react. This project is a consolidation of my front-end skills.A fully responsive webapp.That has features like location of hotels by map, filtering hotels by stars rating and price.I would love to extend this to a full stack project some time in the future 
            </p>
            <img src={roomrentals} height={300} width={300}/>
        </div>

        <div className="project3">
        <div className="project-title-3">
            <h1>Hiring-Lab</h1>
            <h3>Get your dream job...</h3>
            <a href="https://github.com/vign2020/Hiring-Lab"><span class="link"><FaCode style={{ fontSize: '34px' }} /></span>gihub link</a>
            </div>
          
        
            <p>
            The Hiring Lab provides an easy and convenient application for job seekers to find their desired jobs and for the recruiters to find the right candidate.Made using Html , css3, nodejs and mongoose as the nosql database, it is one of my early works in my developer jeourney
            </p>
            <img src={projects1} height={300} width={300}/>
        </div>
    </div>
  )
}
