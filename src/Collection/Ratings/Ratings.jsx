import React, { useState } from 'react'
import './Ratings.css'
const Ratings = () => {
    const [ratings,setRatings]=useState(null)
    
  return (
    <div className='ratings'>
        <h1>Ratings</h1>
        <div className='ratings-bar'>
            {Array.from(Array(5)).map((_,index)=>
             <div style={{background:`${ratings >index  ? "#ffdf0dff":"#e2e2e2"}`}} onClick={()=>setRatings(index+1)} className='ratings-box'></div>)
             }
        </div>
        <button onClick={()=>setRatings(null)}>Reset</button>
        

    </div>
  )
}

export default Ratings