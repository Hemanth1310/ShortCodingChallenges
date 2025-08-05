import React, { useState } from 'react'

const ExpenseEntry = (props) => {
    const initialEntry={
        amount:'',
        purpose:'',
        type:'',
        id: Date.now()
    }
    const [entry,setEntry] =useState(initialEntry)
    const [invalid,setInvalid] = useState('')

    const handleData=()=>{

        if(entry.amount != '' && entry.purpose!='' && entry.type !=''){
            if( entry.type==='Expense' && props.balance<entry.amount)
            { 
                setInvalid("You dont have the budget for the expense")
                return
                      
            }
            props.handleEntries(entry);
            setEntry(initialEntry)
            console.log({entry})
            setInvalid('')

        }else{
            setInvalid("Please Fill all the entries before submiting!!!")
            console.log({entry})
        }

    }

    const handleEntry=(e)=>{
        const {name,value} = e.target;
        setEntry(pre=>({...pre,[name]:value}))
        
    }

  return (
    <div className='expenseEntry-container'>
        <input type='number' name='amount' className='expense-text-input' value={entry.amount} placeholder='amount' onChange={handleEntry}></input>
        <input type='text' name='purpose' className='expense-text-input' value={entry.purpose} placeholder='purpose' onChange={handleEntry}></input>
        <div style={{display:'flex',gap:'50px',justifyContent:"center",fontSize:'18px'}}>
             <p><input type='radio' name='type' value='Budget' onClick={handleEntry}></input>Budget</p>

             <p><input type='radio' name='type' value='Expense' onClick={handleEntry}></input>Expense</p>
        </div>
        <button onClick={handleData}>Add Entry</button>

        {invalid!==''?<span style={{color:'#fff', background:"#FAA0A0", padding:'10px',border:'3px solid #EC5800', borderRadius:"10px"}}>{invalid}</span>:null}
       
    </div>
  )
}

export default ExpenseEntry