import React, { useEffect, useState } from 'react'
import './Assets/RandomColorBox.css'
const RandomColorBox = () => {
    // This component will generate a random color box
    const [colors, setColors] = useState([]);
    const generateRandomColor = () => {
        const a = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const c = Math.floor(Math.random()*256);    
        const randomColor = `rgb(${a}, ${b}, ${c})`;
        // setColors([...colors, randomColor]);
        return randomColor;
    }

    const generateColorCollection =()=>{
        const newColors = [];

        while(newColors.length<16){
            const newColorval = generateRandomColor()
            if(!newColors.includes(newColorval)){
                newColors.push(newColorval)
            }
        }
        return newColors
    }

    const generatePallet = () => {
        const newColorPal = generateColorCollection()
        setColors(newColorPal)
    }
    useEffect(()=>generatePallet(),[])
  return (
    <div className="RandomColorBox">
        <h1>RandomColorBox</h1>
        <div className='box-grid-container'>
            {colors.map((color,index)=>(
                <div style={{backgroundColor:`${color}`}} key={index} onClick={()=>console.log(color)} className='rcbox'></div>
            ))}    
        </div>
        <button onClick={generatePallet}>Change Pallet</button>    
    </div>
  )
}

export default RandomColorBox