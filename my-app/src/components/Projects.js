import React from 'react'
import projects1 from '../images/projects1.png'
import roomrentals from '../images/room-rentals.png'
import profile from '../images/profile.JPG'
import codecrunch from '../images/codecrunch.png'

import { FaCode } from 'react-icons/fa';


export default function Projects() {
  return (
    <>

    <h1>Projects</h1>
    <div className='projects-wrapper'>
 
        <div className="project1">
            <div className="project-title">
                <h2>Sorting-algorithms-using-react-hooks</h2>
                <h3>visualize sorting algorithms at one place</h3>
                <a href="https://github.com/vign2020/Sorting-algorithms-using-react-hooks"><span class="link"><FaCode style={{ fontSize: '34px' }} /></span>gihub link</a>
           
            </div>
           
            <p>Sorting algorithsm can be fun when visualized!!! that is exactly what i have done in this project.
            This project aims at visualizing various sorting algorithms using react hooks to create visualizations everytime the array is getting sorted. 
            </p>
            <img src={projects1} style={{'border-radius' : '5%' , 'width' : '100%' , 'height':'auto' , 'object-fit' : 'cover'}}/>
        </div>

        <div className="project2">
        <div className="project-title-2">
                <h2>Room-booking.com</h2>
                <h3>Make your travel a lifelong memory...</h3>
                <a href="https://github.com/vign2020/room-rentals"><span class="link"><FaCode style={{ fontSize: '34px' }} /></span>gihub link</a>
            </div>
          
            <p>
                Built using react. This project is a consolidation of my front-end skills.A fully responsive webapp.That has features like location of hotels by map, filtering hotels by stars rating and price.I would love to extend this to a full stack project some time in the future 
            </p>
            <img src={roomrentals} style={{'border-radius' : '5%' ,'width' : '100%' , 'height':'auto' , 'object-fit' : 'cover'}}/>
        </div>

        <div className="project3">
        <div className="project-title-3">
            <h2>Hiring-Lab</h2>
            <h3>Get your dream job...</h3>
            <a href="https://github.com/vign2020/Hiring-Lab"><span class="link"><FaCode style={{ fontSize: '34px' }} /></span>gihub link</a>
            </div>
          
        
            <p>
            The Hiring Lab provides an easy and convenient application for job seekers to find their desired jobs and for the recruiters to find the right candidate.Made using Html , css3, nodejs and mongoose as the nosql database, it is one of my early works in my developer jeourney
            </p>
            <img src={profile} style={{'border-radius' : '5%' ,'width' : '100%' , 'height':'auto' , 'object-fit' : 'cover'}} />
        </div>

        <div className="project4">
        <div className="project-title-4">
            <h2>Code-Crunch</h2>
            <h3>An online judge to solve some algorithmic problems</h3>
            <a href="https://github.com/vign2020/Code-Crunch"><span class="link"><FaCode style={{ fontSize: '34px' }} /></span>gihub link</a>
            </div>
            <p>
            Code-Crunch is an online judge to solve some algorithmic problems .some of the key features of this project include a token based user authentication  using JWT. Online code Editor using the nodejs library 'child_process' Discussion forum to make posts A profile page that consists of user's information
            </p>
            <img src={codecrunch} style={{'border-radius' : '5%' ,'width' : '100%' , 'height':'auto' , 'object-fit' : 'cover'}} />
        </div>
                
       
    </div>
    </>
  )
}
