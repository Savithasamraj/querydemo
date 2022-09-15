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
    // setUser([...User, fetch.data]);
    console.log(userContextData.User);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div class="container" id="contain">
       
          <div  id="table1">
            {userContextData.User.map((users) => {
              return (
                <div id="innertable">
                  <div className="date">
                  <p >{users.date}</p>
                   <p >{users.time}</p>
                    </div>
                    <p id="category"><span className="span">Category:</span> {users.category}</p>
                  <p id="subcategory"><span className="span">Subcategory:</span>{users.subcategory} </p>
                  
                  {/* <p id="language"><span>Language:</span> {users.language}</p> */}
                   <p id="title"><span className="span">Querytitle:</span> {users.querytitle}</p>
                  <p id="description"><span className="span">Description:</span> {users.querydescription}</p>
                 
                  

                </div>
              );
            })}
          </div>
         
        </div>
    
    </>
  );
}
export default Mainpage;
