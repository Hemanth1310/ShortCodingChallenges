import React, { useState } from 'react'
import './Assets/Validator.css'
const Validator = () => {
    const [checkerStatus,setCheckerStatus] = useState()
    const [emailcheckerStatus,setEmailCheckerStatus] = useState()
    const [data,setData] = useState({
        creditcard:null,
        email:''
    })

    const handleCheck = () =>{

        if(data.creditcard>99999999999 && data.creditcard<=999999999999){
            setCheckerStatus("This is a Valid Card number")
        }else{
            setCheckerStatus("This is not a Valid Card number")
        }

        // setData({
        //     creditcard:null
        // })

        // setCheckerStatus('')

    }

    const handleEmailCheck=()=>{


            
            if(data.email.includes('@'))
            {   
                
                if(data.email.split('@')[1].includes('.com')){
                    setEmailCheckerStatus('It is a Valid Email ID')
                }
                else{
                    setEmailCheckerStatus('Not a Valid Email ID')
                }

            }else{
                setEmailCheckerStatus('Not a Valid Email ID')
            }
        

    }


    const handleInputChange=(e)=>{
        const {name,value,type}=e.target

        setData((prev)=>({...prev,[name]:value}))
        

    }


    return (
    <div className='Validator'>
        <input type="text" name="creditcard" value={data.creditcard} onChange={handleInputChange} placeholder='Enter Credit card number here'></input>
        <button onClick={handleCheck}>Check</button>
        <div><h2>{checkerStatus}</h2></div>

        <div className='greenline'></div>

        <input type="text" name="email" value={data.email} onChange={handleInputChange} placeholder='Enter Email ID here'></input>
        <button onClick={handleEmailCheck}>Check</button>
        <div><h2>{emailcheckerStatus}</h2></div>
    </div>
  )
}

export default Validator