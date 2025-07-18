import React, { useEffect, useState } from 'react'
import './JokeGenerator.css'
const JokeGenerator = () => {

    const [jokes,setJokes] = useState()


    const fetchJoke=()=>{
        fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
        .then((res)=>res.json())
        .then((res)=>setJokes(res.joke))
        .catch((err)=>console.log(err))
    }


    useEffect(()=>{
       fetchJoke()
    },[])


  return (
    <div className='joke-component'>
        <div className="joke-container">
            <h1>Joke Generator</h1>
    
            <div className='joke'>{jokes}</div>

            <button onClick={fetchJoke} >New Joke</button>

        </div>
      
    </div>
  )
}

export default JokeGenerator