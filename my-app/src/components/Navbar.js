import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {

  const [toggle , SetToggle]= useState(false)

  const handleToggle = ()=>{
    SetToggle(!toggle);
  }
  
  return (
<div className="main-container-navbar">
<h1 className="logo"><span>Vi</span>gnesh</h1>
        <div className="hamburger-menu" onClick={handleToggle}>&#9776;</div>
        {
          toggle === true ? 
          <div className="modal-container-active" style={{'position' : 'fixed' , 'display' : 'flex' , 'top' : '0' , 'left' : '0' , 'width' : '100%' , 'height' : '100%' , 'background' : 'rgba(1 , 1 , 1 , 0.8)' , 'justifyContent' : 'center' , 'align-items' : 'center'}}>

     
            <div className="modal-content" style={{ 'background-color' : 'white' ,'border' : '2px solid grey' , 'width' : '100%', 'padding' : '20px', 'display' : 'flex' , 'padding' : '60px 20px' , 'max-width' : '400px' , 'border-radius' : '5%'}}>

            <span className="close-btn" onClick={()=>{SetToggle(false)}} style={{'position' : 'absolute' , 'cursor' : 'pointer' , 'font-size' : '18px' , 'color' : '#333'}}>&times;</span>
            <ul className="navbar-toggle" style={{'display' : 'block' ,  'list-style' : 'none' }}>
            <li style={{'margin' : '20px 20px' , 'cursor' : 'pointer'}}><Link to="Header-main-container" smooth={true} duration={200} onClick={()=>{SetToggle(!toggle)}} >Home</Link></li>
            <li style={{'margin' : '20px 20px' , 'cursor' : 'pointer'}}><Link to="tech-stack" smooth={true} duration={200} onClick={()=>{SetToggle(!toggle)}}>Tech Stack</Link></li>
            <li style={{'margin' : '20px 20px' , 'cursor' : 'pointer'}}><Link to="projects-wrapper" smooth={true} duration={200} onClick={()=>{SetToggle(!toggle)}}>Projects</Link></li>
            <li style={{'margin' : '20px 20px' , 'cursor' : 'pointer'}}><Link to="Education" smooth={true} duration={200} onClick={()=>{SetToggle(!toggle)}}>Education & Work</Link></li>
            <li style={{'margin' : '20px 20px' , 'cursor' : 'pointer'}}><Link to="contact" smooth={true} duration={200} onClick={()=>{SetToggle(!toggle)}}>Contact</Link></li>
          </ul> 
            </div>
            </div>
          : <ul className="navbar-toggle" style={{'display' : 'none' }}>
        <li><Link to="Header-main-container" smooth={true} duration={200}>Home</Link></li>
          <li><Link to="tech-stack" smooth={true} duration={200}>Tech Stack</Link></li>
          <li><Link to="projects-wrapper" smooth={true} duration={200}>Projects</Link></li>
          <li><Link to="Education" smooth={true} duration={200}>Education & Work</Link></li>
          <li><Link to="contact" smooth={true} duration={200}>Contact</Link></li>
        </ul>
        }
        <ul className={`navbar`} >
        <li><Link to="Header-main-container" smooth={true} duration={200}>Home</Link></li>
          <li><Link to="tech-stack" smooth={true} duration={200}>Tech Stack</Link></li>
          <li><Link to="projects-wrapper" smooth={true} duration={200}>Projects</Link></li>
          <li><Link to="Education" smooth={true} duration={200}>Education & Work</Link></li>
          <li><Link to="contact" smooth={true} duration={200}>Contact</Link></li>
        </ul>

     
       

      
      

      

    </div>
  )
}
