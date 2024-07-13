import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {
    const data ={Username:"",Email:"",Password:"",Age:""}
    const [inputVal,setInputVal]=useState(data);
  const navigate = useNavigate();


    const handleChange =(e) =>{
const {name,value} =e.target ;
setInputVal((prevValues)=>({
    ...prevValues,
    [name]:value 
    
}));
    }

const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem('userData',JSON.stringify(inputVal));
    alert("Registration successful!");
navigate('/loginform')
}
  return (
    <div className="register-form-container">
      <h2>Registration Form</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input type="text"  name="Username"   value={inputVal.Username} onChange={handleChange} placeholder="Username" />
        <input type="email" name="Email"   value={inputVal.Email}  onChange={handleChange} placeholder="Email" />
        <input type="password" name="Password"   value={inputVal.Password} onChange={handleChange}  placeholder="Password" />
        <input type="number" name="Age"   value={inputVal.Age}  onChange={handleChange} placeholder="Age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
