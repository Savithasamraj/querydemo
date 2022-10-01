import React, { useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";
import "./style.css";
import UserContext from "./UserContxt";

function Mainpage() {
  const userContextData = useContext(UserContext);
  let fetchdata = async () => {
    const fetch = await axios.get("https://quer-server.herokuapp.com/dashboard", {
      headers: {
        Authorization: `${localStorage.getItem("react_app_token")}`,
      },
    });
    userContextData.setUser(fetch.data);
    console.log(fetch.data);
    
    console.log(userContextData.User);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div class="container" id="contain">
       
          <div  id="table1">
            {userContextData.User.map((users,index) => {
            
              return (
                <div id="innertable">
                  <div className="date">
                    <p  className="span1">query no:{index+1}</p>
                  <p className="span1" >{users.date}</p>
                   <p  className="span1">{users.time}</p>
                   
                    </div>
                    <p  className="span1"><span className="span">Category:</span> {users.category}</p>
                  <p  className="span1"><span className="span">Subcategory:</span>{users.subcategory} </p>
                  
                 
                   <p  className="span1"><span className="span">Querytitle:</span> {users.querytitle}</p>
                  <p  className="span1" ><span className="span">Description:</span> {users.querydescription}</p>
                  <p  className="span1"><span className="span">Assigned to:</span> {users.mentor}</p>
                  <p  className="span1"><span className="span">status:</span> {users.status}</p>
                  

                </div>
              );
            })}
          </div>
         
        </div>
    
    </>
  );
}
export default Mainpage;
