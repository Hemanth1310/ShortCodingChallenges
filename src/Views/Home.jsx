import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import './Assets/Home.css'

const Home = () => {
  const navigate = useNavigate()
  const { username, password } = useParams()  
  
 const handleNavigate = (link) => {
    navigate(`/${link}`)
  }
  return(
    <div className='Home'>
      <h1>Collection of Small Projects</h1>
      <div className='greenline'></div>
      <div className='projects-list'>
        <div className='project-item' >
          <h2>Projects Demonstrating React Hook</h2>
          <button onClick={()=>handleNavigate("form")}> Basic Form</button>
        </div>
        <div className='project-item'>
          <h2>Random Color Generator</h2>
          <button onClick={()=>handleNavigate("random-color-generator")}> Random Color Generator</button>
        </div>
        <div className='project-item'>
          <h2>Validator</h2>
          <button onClick={()=>handleNavigate("validator")}>Validator</button>
        </div>
        <div className='project-item'>
          <h2>Quiz</h2>
          <button onClick={()=>handleNavigate("quiz")}>Quiz</button>
        </div>
        <div className='project-item'>
          <h2>TextConverter</h2>
          <button onClick={()=>handleNavigate("text-converter")}>Text Converter</button>
        </div>

      </div>


        
    </div>
  )
}

export default Home

// This component displays a personalized welcome message based on the username and password passed through the URL parameters.
// If the username is 'admin' and the password is 'admin', it shows a special welcome message.
// Otherwise, it displays a generic welcome message prompting the user to log in for personalized content.
// The username is processed to remove the domain part (if any) for display purposes.