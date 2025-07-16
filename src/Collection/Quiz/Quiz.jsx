import React, { useState } from 'react'
import qBank from './Qestions'
import './Quiz.css'
const Quiz = () => {
    const [record,setRecord]= useState({
        answers:[],
    })
    const [score,setScore]= useState(0)
    const [currentQue,setCurrentQue]= useState(0);
    const [endFlag,setEndFlag] = useState(false)

    const handlePrev=()=>{
        setCurrentQue((prev)=>prev-1)
    }

    const handleNext = ()=>{
        setCurrentQue((prev)=>prev+1)
    }

    const handleSelection = (e)=>{
         const temp = [...record.answers]
         temp.splice(currentQue,1,e.target.value)
        // temp[currentQue] = e.target.value
       
        setRecord({...record,answers:temp})
    }

    const handleSubmit=()=>{
        setEndFlag(true)
        
    }

    const calculateScore = ()=>{
        let tscore=0
        record.answers.forEach((answer,index)=>{
            if(answer===qBank[index].answer){
                tscore++
            }
        })
        return tscore
    }


  return (
    <div className='quiz-container'>
        <h1>Welcome To Quiz App</h1>
        { !endFlag ?  <div className='qa-container'>
             <h2>{qBank[currentQue].question}</h2>
             <div className='quiz-options'>
                 {qBank[currentQue].options.map((opt,index)=>(
                     <div className='q-opt' key={index}>
                              <input type="checkbox" value={opt} checked={record.answers[currentQue]===opt} onChange={handleSelection}></input>
                              <label>{opt}</label>
                     </div>
                    
                 ))}
             </div>
             {qBank.length===currentQue+1? <div className='que-control'>
                 <button onClick={handlePrev}>Previous</button>
                 <button onClick={handleSubmit}>Submit</button>
             </div>:<div className='que-control'>
                 <button onClick={handlePrev}>Previous</button>
                 <button onClick={handleNext}>Next</button>
             </div>}
            </div> : <div className='qa-container' >
                <h2>Your Score is {calculateScore()}</h2>
             </div> }
            
    </div>
  )
}

export default Quiz