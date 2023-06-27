import React from 'react'
import Navbar from './components/Navbar'
import Header  from './components/Header'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Education from './components/Education'
import Work from './components/Work'

export default function App() {
  return (
    <>
      <Navbar/>
    <Header/>
    <TechStack/>
    <Projects/>
    <Education/>
    <Work/>
    </>
  )
}
