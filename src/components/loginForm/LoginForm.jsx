import React, { useState } from 'react'
import  './LoginForm.css';
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const initialState = { Email: "", Password: "" };

    const [inputVal, setInputVal] = useState(initialState);
    const [user, setUser] = useState(null);
     const navigate  = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputVal((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };

const handleSubmit =(e) =>{
    e.preventDefault();
    const storeduser = JSON.parse(localStorage.getItem('userData'))
    if(storeduser && storeduser.Email ===inputVal.Email && storeduser.Password ===inputVal.Password){
        setUser(storeduser);
        alert(`You have successfully Logged In, ${storeduser.Username}!`);
        setInputVal(initialState); 
        navigate('/navbar')


    } else{
        alert("Invalid userName & EmailId")
    }
}
  return (
    <div className="register-form-container">
          <h2>Login Form</h2>

    <form className="register-form" onSubmit={handleSubmit} >
    <input
          type="email"
          name="Email"
          value={inputVal.Email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="Password"
          value={inputVal.Password}
          onChange={handleChange}
          placeholder="Password"
        />
    <button type="submit">Submit</button>

    </form>
 </div>
  )
}

export default LoginForm;
