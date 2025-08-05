import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './ExpenceTracker.css'
import ExpenseEntry from './ExpenseEntry'
const ExpenseTrackerContainer = styled.div`
    height: 100%;
    width: 50%;
    margin: 50px 0px 50px 0px;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 50px;
    padding: 50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    /* overflow-x: scroll; */
    overflow-y: scroll;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */   }
`

const Heading = styled.h1`

`

const ExpenseTracker = () => {
  
  const [entries,setEntries] =useState([])
  const [showAddEntry, setShowAddEntry]= useState(false)
  const [balance,setBalance] = useState(0)
  const [search,setSearch] = useState('')
  const [budget,setBudget] = useState(0)
  const [expenses,setExpenses] = useState(0)

  const colorHandler= { color:balance-expenses<100?"#FF3131":"#000"}
    


  const handleEntryController = ()=>{
    setShowAddEntry(prev=>!prev)
  }

  const handleEntries = (data)=>{

    if(data.type=='Budget')
    {
      setBudget(prev=>prev+parseInt(data.amount))
     

    }else {
      setExpenses(prev=>prev+parseInt(data.amount))
    }
    setEntries(prev=>([...prev,data]))
    handleEntryController();
  }
  const handleDelete = (id)=>{
    const filteredItem = entries.filter((val=>val.id===id))
    if(filteredItem[0].type==='Budget')
    {
       setBudget(bud=>bud-parseInt(filteredItem[0].amount))
    }else{
      setExpenses(exp=>exp-parseInt(filteredItem[0].amount))
    }
   
    setEntries((pre=>pre.filter((val)=>val.id!=id)))
  }


  useEffect(()=>setBalance(budget-expenses),[entries])
  
  return (
   <ExpenseTrackerContainer>
      <Heading>Expense Tracker</Heading>
      <div className='entry-controller'>
        <p>Balance: ${balance}</p>
        <button onClick={handleEntryController}>{showAddEntry?'Cancel':'Add'}</button>
      </div>
      {showAddEntry?<ExpenseEntry balance={balance} handleEntries={handleEntries}></ExpenseEntry>:null}
      <div className='expense-bd-diplay'>
        <div>
            <span>Expenses</span>
            <span style={colorHandler}>{expenses}</span>
        </div>
        <div>
          <span>Budget:</span>
          <span>{budget}</span>
        </div>

      </div>
      <div className='Expense-list'>
        <h3>Transactions</h3>
        <input type='text' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search'></input>
        {entries.filter((val)=>val.purpose.includes(search)).map((val)=><div className='Expense-list-item'>
          <p>{val.purpose}</p>
          <p>{val.amount}</p>
          <button onClick={()=>handleDelete(val.id)}>Remove</button>
        </div>)}
      </div>
   </ExpenseTrackerContainer>
  )
}

export default ExpenseTracker