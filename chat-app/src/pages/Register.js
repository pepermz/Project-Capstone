import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Logo from "../assets/project4.png"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function Register() {
    const [values, setValues]= useState({
        username:"",
        email:"",
        password:"",
        confirmPassword: "",
    })
    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        if(handleValidation()) {
            // const {email}
        }
    }

    const handleValidation = () =>{
        const {password, confirmPassword, username, email} = values;
        if(password !== confirmPassword) {
            toast.error("Your Password Doesn't Match", toastOptions)
            return false;
        } else if (username.length<3){
            toast.error("Username Should be Longer Than 3 Characters", toastOptions)
            return false;
        } else if (password.length<8){
            toast.error("Password Should be Longer Than or Equal to 8 Characters", toastOptions)
            return false;
        }   else if (email===""){
            toast.error("Email is Required", toastOptions)
            return false;
        }
        return true;
    }

    const handleChange = (event) =>{
        setValues({...values,[event.target.name]:event.target.value})
    }
    return (
    <>
        <FormContainer>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <div className="brand">
                    <img src={Logo} alt="LOGO" />
                    <h1>ChatApp</h1>
                </div>
                <input type="text" placeholder='Username' name="username" onChange={e=>handleChange(e)} />
                <input type="email" placeholder='Email' name="email" onChange={e=>handleChange(e)} />
                <input type="password" placeholder='Password' name="password" onChange={e=>handleChange(e)} />
                <input type="password" placeholder='Confirm Password' name="confirmPassword" onChange={e=>handleChange(e)} />
                <button type='submit'>Create User</button>
                <span>already have an account ? <Link to="/login">Login</Link></span>
            </form>
        </FormContainer>
        <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;
    .brand {
        display:flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img{
            height: 5rem;
        }
        h1 {
            color: white;
            text-transform: uppercase;;
        }
    }
    form{
        display:flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;
        input {
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #4e0eff;
            border-radius: 0.4;
            color: white;
            width: 100%;
            font-size: 1rem;
            &:focus {
                border: 0.1rem solid #997af0;
                outline: none;
            }
        }
        button {
            background-color: #997af0;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            &:hover {
                background-color: #4e0eff;
            }
        }
        span {
            color: white;
            text-transform: uppercase;
            a {
                color: #4e0eff;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }
`;

export default Register