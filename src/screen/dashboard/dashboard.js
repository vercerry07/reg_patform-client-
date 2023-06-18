import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
const Dashboard = () => {
  
  let navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem('token')
    
  //  console.log(token) 
   if(!token){
    navigate('/login')   
   }
  }, [navigate])
  

  let logout = ()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div>Dashboard 
   <button onClick={logout}>logout</button>


    </div>
  )
}

export default Dashboard