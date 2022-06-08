import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

const handleSubmit =(event)=>{
    event.preventDefault();
    alert("form")
}

const handleChange = (event) =>{

}

function Register() {
  return (
    <>
        <FormContainer>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <div className="brand">
                    <img src="" alt="" />
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
    </>
  )
}

const FormContainer = styled.div``;

export default Register