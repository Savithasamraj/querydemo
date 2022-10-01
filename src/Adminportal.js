import React from 'react'
import { useNavigate } from 'react-router-dom'

function Adminportal() {
    const navigate=useNavigate()
    
  return (
    <>
     <nav class="navbar navbar-light bg-dark">
  <div id="login">
 
    <button onClick={()=>navigate("/admin")} >Logout</button>
  </div>
  
</nav></>
  )
}

export default Adminportal