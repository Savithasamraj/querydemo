import React, {useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css"
function Mainpage() {
const [User, setUser] =useState([])
let fetchdata= async()=>{

        const fetch=  await axios.get("http://localhost:5000/dashboard",{
            headers: {
              Authorization: `${localStorage.getItem("react_app_token")}`, 
            }})
         console.log(fetch.data)
         setUser(...User,fetch.data)
    // setUser(User.concat(fetch.data))

    console.log(User)
    }
     useEffect(()=>{
        fetchdata()
     },[])
  return (
    <>
<div class="container">
  <div class="row" id="row">
    <div class="col-8" id="table1">
        
{
  User.map((users)=>{
      <div class="dash"> 
        <p>{users.category}</p>
        
         </div>
    })
}


    </div>
    <div class="col-4" id="table2">
    
    </div>
  </div>
  
</div>

    </>
  )
}

export default Mainpage