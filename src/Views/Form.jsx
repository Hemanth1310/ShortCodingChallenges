import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Assets/Form.css'

const Form = () => {
    const {username, password} = useParams();
    const [udetails, setUDetails] = useState({
         fname: '',
         lname: '',
         email: '',
         contact: '',
         gender:'',
         subjects: [],
         fileStatus:false,
         file:'',
         url:'',
         choice:'',
         about:'',
 
    });
 
    
    const handleFormChange = (e) =>{
     const {name, value , type, checked} = e.target;
     if(type ==='checkbox'){
         setUDetails((prev)=>({
             ...prev,
             subjects:checked ? [...prev.subjects,value]: prev.subjects.filter(item=>item!==value) }))
     } else if(type==='file'){
         setUDetails(prev=>({...prev,[name]:e.target.files[0],fileStatus:true}))
     }
     else{
         setUDetails((prev)=>({...prev, [name]:value}))
     }
     
    }
   return (
     <div className='Form-main'>
       <h1>Form In React</h1>
       <form className='form' onSubmit={(e)=>{e.preventDefault(); console.log(udetails); alert("Form Submitted Successfully")}}>
             <div className='form-field'>
                 <label>First Name*</label>
                 <input type='text' name='fname' value={udetails.fname} onChange={handleFormChange} placeholder='Enter your first name' />
             </div>
             <div className='form-field'>
                 <label>Last Name*</label>
                 <input type='text' name='lname' value={udetails.lname} onChange={handleFormChange} placeholder='Enter your last name' />
             </div>
             <div className='form-field'>
                 <label>Enter EMAIL*</label>
                 <input type='text' name='email' value={udetails.email} onChange={handleFormChange} placeholder='Enter your email' />
             </div>
             <div className='form-field'>
                 <label>Contact*</label>
                 <input type='text' name='contact' value={udetails.contact} onChange={handleFormChange} placeholder='Enter your Contact Information' />
             </div>
             <div className='form-field'>
                 <label>Gender*</label>
                 <div className='option'>
                     <div className='option-label'><input type='radio' name='gender' value={"Male"} onChange={handleFormChange}></input>Male</div>
                     <div className='option-label'><input type='radio' name='gender' value={"Female"} onChange={handleFormChange}></input>Female</div>
                     <div className='option-label'><input type='radio' name='gender' value={"Others"} onChange={handleFormChange}></input>Others</div>
                 </div>    
             </div>
 
             <div className='form-field'>
                 <label>Subjects</label>
                 <div className='option'>
                     <div className='option-label'><input type='checkbox' name='subjects' value={"English"} checked={udetails.subjects.includes('English')} onChange={handleFormChange}></input>English</div>
                     <div className='option-label'><input type='checkbox' name='subjects' value={"Hindi"} checked={udetails.subjects.includes('Hindi')} onChange={handleFormChange} ></input>Hindi</div>
                     <div className='option-label'><input type='checkbox' name='subjects' value={"Maths"} checked={udetails.subjects.includes('Maths')} onChange={handleFormChange}></input>Maths</div>
                 </div>
             </div>
             <div className='form-field'>
                 <label>Upload Certificates*</label>
                 <input type='file' name="file"  onChange={handleFormChange} />
             </div>
             <div className='form-field'>
                 <label>URL*</label>
                 <input type='text' name='url' value={udetails.url} onChange={handleFormChange} placeholder='Enter URL'  />
             </div>
             <div className='form-field'>
                 <label>Choice*</label>
                 <select name='choice' value={udetails.choice} onChange={handleFormChange}>
                     <option value=''>Select</option>
                     <option value='Option 1'>Beginner</option>
                     <option value='Option 2'>Intermediate</option>
                     <option value='Option 3'>Advance</option>
                 </select>       
             </div>
             <div className='form-field'>
                 <label>About Yourself*</label>
                 <textarea name='about' value={udetails.about} onChange={handleFormChange} placeholder='Tell us about yourself'></textarea>
             </div>
             <button type='submit'>Submit</button>
       </form>
     </div>
   )
}

export default Form