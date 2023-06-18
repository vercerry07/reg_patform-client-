import React,{useState} from 'react'
import './register.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Registration = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  
  const [username, setusername] = useState('')
  let navigate = useNavigate()

  let submit = (e)=>{
    
    e.preventDefault()
    let email_regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
    if(!email || !password){
     alert('Please enter the required fields')
    }
    else if(!email.match(email_regex)) {
    alert('Please enter a valid email address') 
    }

    else if(password.length < 6){
     
      alert('password should be at least 6 characters')
    }
    else{
      axios.post('http://localhost:3200/api/user/',{
      name:username, 
      email,
      password
      
    }).then((res)=>{
     console.log(res)
     
     localStorage.setItem('token',res?.data?.token)
     
     




     navigate('/dashboard')
    }).catch((err)=>{
     console.log(err?.data?.message)
    
    alert(err?.response?.data?.message)
    }) 
      // console.log(email)
       
    }
    
    // setusername('')
    
    // setemail('')
    // setpassword('')
     
  }




  return (
    <>

    <h2>Register</h2>

    <hr />
    <div className='formcontainer'>
    <Form onSubmit={submit}>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={username} onChange={(e)=> setusername(e.target.value)} placeholder="Enter username" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link style={{ marginLeft:'10px'}} to='/login'>Already registered?</Link> 
    
    </Form>
    
     </div>
     </>
  )
}

export default Registration