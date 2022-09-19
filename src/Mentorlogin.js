import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import UserContext from "./UserContxt";
import { useNavigate } from "react-router-dom";
function Mentorlogin() {
  const userContextData = useContext(UserContext);
  const navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
          mentorname: "",
          password: "",
        },
        validate: (values) => {
          let errors = {};
          if (!values.mentorname) {
            errors.mentorname = "mentorname is required";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        },
        onSubmit: async (values) => {
          try {
            const login = await axios.post("https://quer-server.herokuapp.com/form", values);
            localStorage.setItem("react_app_token", login.data.token);
            // localStorage.setItem("react_app_token", login.data.name);
          userContextData.setname(values.mentorname);
          
            alert(` Hello  ${values.mentorname}  
                      ${login.data.message}`);
                      if(login.data.message=== "Welcome to Query Ticket Raising Portal"){
                        navigate("/form")
                        // userContextData.setname(" ");
                      }
                          
           
            // alert(` Hello  ${values.mentorname}  
            //           ${login.data.message}`);
          } catch (error) {
            console.log(error);
          }
        },
      });
  return (
    <>
      <form className="form" id="loginform" onSubmit={formik.handleSubmit}>
        <h2 className="topics">Query Ticket raising !!</h2>

        <div class="mb-3">
          <label for="mentorname" class="form-label">
            <img
              className="logimage"
              src="https://cdn-icons-png.flaticon.com/512/4743/4743186.png"
            ></img>{" "}
            mentorname
          </label>
          <input
            type="text"
            class="form-control"
            id="mentorname"
            name="mentorname"
            placeholder="Enter mentorname"
            onChange={formik.handleChange}
            value={formik.values.mentorname}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            <img
              className="logimage"
              src="https://cdn-icons-png.flaticon.com/512/2889/2889676.png"
            ></img>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            placeholder="Enter password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <div class="mb-3">
          <p class="form-label">
            Don't have account,
            <Link to="/register">Click here</Link> to register
          </p>
        </div>
      </form>
    </>
  );
}

export default Mentorlogin;
