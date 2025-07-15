import React, { useState, useEffect } from 'react'
import './Assets/Login.css'
import { useNavigate, useNavigation } from 'react-router'
const  Login=()=> {

    const navigate = useNavigate()
    const [formData,setFormData]= useState({ username: '', password: ''})

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData(prevState=>({...prevState,[name]:value}))
        
    }
    const handleSubmit=()=>{
        console.log("Form Submitted: ", formData);

        navigate(`/home/${formData.username}/${formData.password}`)
        // Here you can add your form submission logic, like sending data to an API
    }

    useEffect(()=>{
        console.log("Form Data Updated: ", formData)
    },[formData])
  return (
    <div className='Login'>
        <div className='Login-card'>
            <h1>Login Here</h1>
            <div className='Login-form'>
                <input type='email' placeholder='Username' name="username" value={formData.username} onChange={handleChange}/>
                <input type='password' placeholder='Password' name="password" value={formData.password} onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
          
        </div>
    </div>
  )
}

export default Login