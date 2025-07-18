import React, { useEffect, useState } from 'react'

import './Hangman.css'

const Hangman = () => {

const words = ["REACT", "JAVASCRIPT", "DEVELOPER", "HANGMAN", "COMPONENT"];

const [firstWord,setFirstWord] = useState('');
const [guessedLetters,setGuessedLetters]  = useState([]);
const [mistakes,setMistakes]  = useState()
const setWords=()=>{
    const tword = words[Math.floor(Math.random()*words.length)];
    // const word= [...tword]

    return tword
}

const resetGame=()=>{
    setFirstWord(setWords());
    setGuessedLetters([])
    setMistakes(0)
}

const handleGuess =(i)=>{

    const charr = String.fromCharCode(65+i)
    setGuessedLetters(prev=>[...prev,charr]);
}

const isGameWon=()=>{
    return firstWord.split("").every((val)=>guessedLetters.includes(val))
}

const isGameLost=()=>{
    return mistakes>3;
}
  
useEffect(()=>{
   resetGame()

},[])

return (
    <div className='hangman'>
        <h1> Hangman</h1>
        <h4>  Hangman is a word-guessing game. Start a new game, guess letters
                to reveal the word, and avoid drawing the hangman by making
                incorrect guesses. Win by guessing the word before the hangman
                is complete. Have fun!</h4>
        <div className='hangman-word'>
            <span>{firstWord.split("").map((c,i)=>(guessedLetters.includes(c)? c:" _ "))}</span>
        </div>
        <div className='hangman-view'>{
            Array.from(Array(26)).map((_,index)=>(
                <button key={index} disabled={guessedLetters.includes(String.fromCharCode(65+index))} onClick={()=>handleGuess(index)}>{String.fromCharCode(65+index)}</button>
            ))
        }</div>

        <div>
            {isGameWon()?<h3>You won the game</h3>:null}
            {isGameLost()?<h3 style={{color:"#ff0000"}}>Sorry You lost the game. Try Again</h3>:null}
            <button style={{background:"#6a5acd", width:"300px"}} onClick={resetGame}>Reset</button>
        </div>
    </div>
  )
}

export default Hangman