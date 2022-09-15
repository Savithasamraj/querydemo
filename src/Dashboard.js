import React from "react";
import { useNavigate } from "react-router-dom";
import Mainpage from "./Mainpage";
import './App.css'

function Dashboard() {
  const navigate=useNavigate()
  let logout=()=>{
    localStorage.removeItem('react_app_token')
    navigate("/")
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     
     <div>
My Queries
     </div>
<div className="create">
     
       <button  className="click"  onClick={()=>navigate("/form")}><img className="image1" src="https://cdn-icons-png.flaticon.com/512/748/748113.png" ></img>Create query</button>
       </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button onClick={logout}>logout</button>
    </nav>
    
    <Mainpage></Mainpage>
    </>
  );
}

export default Dashboard;
