import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContxt";
import { useContext } from "react";
import axios from "axios";
import "./App.css";
import "./Component.css"
function Mentorpage() {
  const userContextData = useContext(UserContext);
  const navigate = useNavigate();http://localhost:5000
  const fetchdata = async () => {
    const data = await axios.get("/mentorpage", {
      headers: {
        Authorization: `${localStorage.getItem("react_app_tokens")}`,
      },
    });
    userContextData.setmentor(data.data);
    console.log(data);
    console.log(data.data);
    
  };

  const logout = () => {
    localStorage.removeItem("react_app_tokens");
    navigate("/mentor");
  };
   const querystatus=async (values)=>{
     console.log(values)
const status=await axios.put("http://localhost:5000/status",values)
console.log(status)
   }
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div>Student Queries</div>
        <div className="create">
          <button className=" loginbut" onClick={logout}>
            logout
          </button>
        </div>
      </nav>
      <div class="container" id="contain">
       
       <div  id="table1">
      {userContextData.mentor.map((mentor, index) => {
        return (
          <>
          <div id="innertable">
<div className="date">
          <p  className="span1"><span className="span">queryno:</span>{index+1}</p>
          <p  className="span1"><span className="span">phonenumber:</span>{mentor.phonenumber}</p>
          <p  className="span1"><span className="span">email:</span>{mentor.email}</p>
          <p  className="span1"><span className="span">Date:</span>{mentor.date}</p>
          <button className="btn btn-primary"  id="resolve"onClick={()=>querystatus(mentor)} value="Resolve the query" >Resolve  query</button>
            </div>
            <p  className="span1"><span className="span">Studentname:</span>{mentor.name}</p>
            <p  className="span1"><span className="span">querytitle:</span>{mentor.querytitle}</p>
            <p  className="span1"><span className="span">Subcategory:</span>{mentor.subcategory}</p>
            <p  className="span1"><span className="span">querydescription</span>{mentor.querydescription}</p>

            </div>
        
          </>
        );
      })}
      </div>
      
      </div>
    </>
  );
}

export default Mentorpage;
