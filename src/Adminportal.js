import axios from "axios";
import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContxt";

function Adminportal() {
  const navigate = useNavigate();
  const userContextData = useContext(UserContext);
let  fetchdata=async function(){
  const fetch=await axios.get("https://quer-server.herokuapp.com/getqueries")
  userContextData.setquery(fetch.data)
  console.log(fetch.data)
  
}
  return (
    <>
      <nav class="navbar navbar-light bg-dark">
        <div id="login">
          <button onClick={() => navigate("/admin")}>Logout</button>
        </div>
        <div id="creatementor">
          <button onClick={() => navigate("/creatementor")}>creatementor</button>
        </div>
        
      </nav>

     
    </>
  );
}

export default Adminportal;
