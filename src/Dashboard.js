import React from "react";
import { useNavigate } from "react-router-dom";
import Mainpage from "./Mainpage";
import './App.css'

function Dashboard() {
  const navigate=useNavigate()
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Homepage
            </a>
          </li>
        </ul>
       <button onClick={()=>navigate("/form")}>create query</button>
      </div>
    </nav>
    
    <Mainpage></Mainpage>
    </>
  );
}

export default Dashboard;
