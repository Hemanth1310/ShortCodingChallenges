import React, { useEffect, useState } from 'react'
import './RPS.css'

const RPS = () => {
    const [winner, setWinner] = useState('Lets start the game')

    const [scores,setScores] =  useState({
        computer:0,
        player:0
    })

    const [choices,setChoices] = useState({
        computer:0,
        player:0
    }) 


    const handleGame = (hit)=>{

        const chit = Math.floor(Math.random()*3)+1;
        const listC=['Rock','Sissor','Paper']
       
        let winMessage = '';
        if(hit=== chit)
        {
            winMessage="The game is a draw"
        }else{
            if((hit===1 && chit===2) ||(hit===2 && chit===3) || (hit===3 && chit===1)){
                 winMessage="The game is won by the player"
                 setScores(prev=>({
                    ...prev,player:prev.player+1
                 }))
                
            }else{
                 winMessage="The game is won by the computer";
                 setScores(prev=>({
                    ...prev,computer:prev.computer+1
                 }))
            }   
        }
        setWinner(winMessage)
       
        setChoices(()=>({
            computer:listC[chit-1],
            player:listC[hit-1]
        }))

    }

    const handleChoices = (ply,comp)=>{
       

    }

  return (
    <div className='rps'>
        <h1>Welcome to the game of rock, paper, scissor</h1>
        <div className="rps-container">
            <div className='rps-choices'>
                <button onClick={()=>handleGame(1)}>Rock</button>
                <button onClick={()=>handleGame(2)}>scissor</button>
                <button onClick={()=>handleGame(3)}>paper</button>
            </div>
            <div className='rps-score-card'>
            <h4>{`PlayerChoise:${choices.player} & computerChoice:${choices.computer}`}</h4>
                <h3>{winner}</h3>
               
                <h4>{`player score : ${scores.player}`}</h4>
                <h4>{`Computer score : ${scores.computer}`}</h4>
            </div>
          
        </div>
        

    </div>
  )
}

export default RPS