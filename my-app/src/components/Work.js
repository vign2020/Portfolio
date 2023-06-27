import React from 'react'
import gmail from '../images/gmail.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
export default function () {
  return (
    <div className='work'>
<h1>Like my work?</h1>
        <h3>Don't hesitate to reach out to me at  👇</h3>
<div className="contact">
<div className="contact-gmail">
    <img src={gmail} height={50} width={50}/>
    <a href='vignesh.s2020b@vitstudent.ac.in'>vignesh.s2020b@vitstudent.ac.in</a>
</div>

<div className="contact-gmail">
    <img src={linkedin} height={50} width={50}/>
    <a href='https://www.linkedin.com/in/vignesh-senthil-78b477209/'>https://www.linkedin.com/in/vignesh-senthil-78b477209/</a>
</div>

<div className="contact-gmail">
<img src={instagram} height={50} width={50}/>
<a href=' https://www.instagram.com/vi_gnesh1092/'> https://www.instagram.com/vi_gnesh1092/</a>
</div>





</div>
    
    </div>
  )
}
