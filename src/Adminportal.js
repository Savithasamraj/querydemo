import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContxt";
import "./App.css";
import "./Component.css";
function Adminportal() {
  const navigate = useNavigate();
  const userContextData = useContext(UserContext);
  let fetchdata = async function () {
    const fetch = await axios.get(
      "https://quer-server.herokuapp.com/getqueries"
    );
    userContextData.setquery(fetch.data.fetch);
    console.log(fetch.data.fetch);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <nav class="navbar navbar-light bg-dark">
        <div id="login">
          <button className=" loginbut" onClick={() => navigate("/admin")}>
            Logout
          </button>
        </div>
        <div id="creatementor">
          <button
            className=" loginbut"
            onClick={() => navigate("/creatementor")}
          >
            creatementor
          </button>
        </div>
      </nav>
      
      <div class="container" id="contain">
        <div id="table1">
          {userContextData.query.map((users, index) => {
            return (
              <div id="innertable">
                <div className="date">
                  {/* <p  className="span1">{index+1}</p> */}
                  <p className="span1">
                    <span className="span">Assigned on:</span> {users.date}
                  </p>
                  <p className="span1">
                    <span className="span">Assigned at:</span>
                    {users.time}
                  </p>
                </div>
                <p className="span1">
                  <span className="span">Student Name:</span> {users.name}
                </p>
                <p className="span1">
                  <span className="span">Category:</span>
                  {users.category}{" "}
                </p>

                <p className="span1">
                  <span className="span">Querytitle:</span> {users.querytitle}
                </p>
                <p className="span1">
                  <span className="span">Description:</span>{" "}
                  {users.querydescription}
                </p>
                <p className="span1">
                  <span className="span">Assigned to:</span> {users.mentor}
                </p>
                <p className="span1">
                  <span className="span">status:</span> {users.status}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Adminportal;
