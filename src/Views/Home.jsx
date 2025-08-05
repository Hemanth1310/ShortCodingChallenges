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
        <div className='project-item'>
          <h2>JokeGenerator</h2>
          <button onClick={()=>handleNavigate("JokeGenerator")}>JokeGenerator</button>
        </div>
        <div className='project-item'>
          <h2>Dice</h2>
          <button onClick={()=>handleNavigate("dice")}>Dice</button>
        </div>
        <div className='project-item'>
          <h2>Rock,Paper and Sissor game</h2>
          <button onClick={()=>handleNavigate("rps")}>Rock,Paper and Sissor game</button>
        </div>
        <div className='project-item'>
          <h2>Hangman game</h2>
          <button onClick={()=>handleNavigate("hangman")}>Play Hangman</button>
        </div>
        <div className='project-item'>
          <h2>Cryptocurrency App</h2>
          <button onClick={()=>handleNavigate("crypto")}>Cryptocurrency App</button>
        </div>
        <div className='project-item'>
          <h2>ExpenseTracker</h2>
          <button onClick={()=>handleNavigate("ExpenseTracker")}>ExpenseTracker</button>
        </div>
         <div className='project-item'>
          <h2>ToDoApp</h2>
          <button onClick={()=>handleNavigate("ToDoApp")}>ToDoApp</button>
        </div>
          <div className='project-item'>
          <h2>Accordion</h2>
          <button onClick={()=>handleNavigate("accordion")}>Accordion</button>
        </div>
         <div className='project-item'>
          <h2>Ratings</h2>
          <button onClick={()=>handleNavigate("ratings")}>Ratings</button>
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