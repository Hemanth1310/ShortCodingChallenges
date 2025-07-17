import React, { useState } from 'react'
import './TextConverter.css'
const TextConverter = () => {
    const [textValue,setTextValue] = useState('');
    const [sampletextValue,setsampleTextValue] = useState('');

    const handleTextInput =(e)=>{
        setTextValue(e.target.value)
    }

    const handleReverse=()=>{

        if(textValue.includes(" ")){
            const strarr = [...textValue];
            strarr.reverse();
            setsampleTextValue(strarr.toString().replaceAll(",",""))
        }else{
            const strarr =textValue.split(" ");
            let text = strarr.reverse().join();
            setsampleTextValue(text)
        }
       
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(textValue)
    }

    const wordCount = ()=>{

        const sam= textValue.length >0 ?textValue.split(" "): [];

        return sam.length
    }



    return (
    <div className='text-converter'>
        <h1>Text Converter</h1>
        <textarea type='text' value={textValue} onChange={handleTextInput}/>
        <div className='tc-buttons'>
            <button style={{backgroundColor:"#4aafcd"}} onClick={()=>setsampleTextValue(textValue.toLowerCase())}> Lower Case</button>
            <button style={{backgroundColor:"#016ecd"}} onClick={()=>setsampleTextValue(textValue.toUpperCase())}> Upper Case</button>
            <button style={{backgroundColor:"#faa632"}} onClick={handleReverse}>Reverse</button>
            <button style={{backgroundColor:"#5ab75c"}} onClick={handleCopy}>Copy</button>
            <button style={{backgroundColor:"#da4f4a"}} onClick={()=>setsampleTextValue("")}> Lower Case</button>

        </div>
        <h3>The Converted value is </h3>
        <div className='tc-converted'>{sampletextValue}</div>

        <div className='tc-summary'>
            {`Word count - ${wordCount()}`}
            
        </div>
    </div>
  )
}

export default TextConverter