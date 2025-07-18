import React, { useState } from 'react'
import './Dice.css'
const Dice = () => {

    const [diceValue,setDiceValue] = useState({
        dice1:'one',
        dice2:'one'
    })

    const strGen=(index)=>{
        const strarr = ['one','two','three','four','five','six'];

        return strarr[index]

    }


    const rollDice = ()=>{
        const d1= strGen(Math.floor(Math.random()*6));
        const d2= strGen(Math.floor(Math.random()*6));

        setDiceValue({
            dice1:d1 ,
            dice2:d2
        })

    }
  return (
    <div className='Dice'>
        <h1>Roll the dice</h1>
        <div className='dice-container'>
            <i class={`fa-solid fa-dice-${diceValue.dice1}`}></i>
            <i class={`fa-solid fa-dice-${diceValue.dice2}`}></i>
        </div>
        <button className='dice-button' onClick={rollDice}>Roll</button>
    </div>
  )
}

export default Dice