import React from 'react'
import gmail from '../images/gmail.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import whatsapp from '../images/whatsapp.jpg';


import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function () {
  return (
    <div className='work'>
<h1>Like my work?</h1>
        <h3>Don't hesitate to reach out to me at  👇</h3>
<div className="contact">
<div className="contact-gmail">
    
    <a href='https://www.linkedin.com/in/vignesh-senthil-78b477209/'> <FaLinkedin color='blue' size={60}/>
</a>
</div>

<div className="contact-gmail">

<a href=' https://www.instagram.com/vi_gnesh1092/'><FaSquareInstagram color='violet' size={60}/> </a>
</div>

<div className="contact-gmail">

<a href='vignesh.s2020b@vitstudent.ac.in'> <SiGmail color='red' size={60}/></a>
</div>




</div>
    
    </div>
  )
}
