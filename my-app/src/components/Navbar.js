import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
<div className="main-container-navbar">
      <h1 className="logo"><span>Vi</span>gnesh.dev</h1>
      <ul className="navbar">
      <li><Link to="Header-main-container" smooth={true} duration={200}>Home</Link></li>
        <li><Link to="tech-stack" smooth={true} duration={200}>Tech Stack</Link></li>
        <li><Link to="projects-wrapper" smooth={true} duration={200}>Projects</Link></li>
        <li><Link to="Education" smooth={true} duration={200}>Education & Work</Link></li>
        <li><Link to="contact" smooth={true} duration={200}>Contact</Link></li>
      </ul>
    </div>
  )
}
