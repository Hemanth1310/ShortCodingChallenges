import React, { useEffect, useRef, useState } from 'react'
import './TodoApp.css'
const ToDoApp = () => {
    const init = useRef()
    const [flag,setFlag]=useState(null)
    const [task,setTask]=useState('')
    const [editTask,setEditTask]=useState('')
    const [todoList,setTodoList] = useState([{id:1,taskName:'Add your name'},{id:2,taskName:'Add your name'}])

    const handleTask =(e)=>{
        const taskTemplate={
            id:Date.now(),
            taskName:task
        }

        setTodoList((val)=>[...val,taskTemplate])
    }
    const handleDelete =(id)=>{

        setTodoList(prev=>prev.filter(item=>item.id!==id))
    }
    const handleEdit =(id)=>{
        // const filteredTodo = todoList.forEach(val=>val.id
        setTodoList(prev=>prev.map(val=>val.id===id?{...val,taskName:editTask}:val))
    }

    useEffect(()=>init.current.focus(),[])
  return (
    <div className='ToDoContainer'>
        <h1>To Do container</h1>
        <div className='todo-task'>
            <input ref={init} type="text" value={task} onChange={e=>setTask(e.target.value)} />
            <button className='todo-add-btn' onClick={handleTask}>Add</button>

        </div>
        <div style={{width:'100%',height:'2px',background:'#1c1c1c'}}></div>

        {
            todoList.map((item,index)=>(
                <div className='todo-handle-container'>
                    <div className='todo-task-list'>
                        <p>{item.taskName}</p>
                        <div>
                            <button className='todo-modify-task' onClick={()=>handleDelete(item.id)}>Delete</button>
                            <button className='todo-modify-task' onClick={()=>setFlag(index)}>Edit</button>
                        </div>

                    </div>
                    {flag===index? <div className='todo-task-edit'>
                        <input type="text" value={editTask} onChange={e=>setEditTask(e.target.value)} />
                        <button onClick={()=>handleEdit(item.id)}>Apply Changes</button>
                    </div>:null}
                   
                </div>
                 
            ))
        }
      
    </div>
  )
}

export default ToDoApp