import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
// import { config } from "./config";
import axios from  "axios"
function Register() {
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email:""
    },
    onSubmit: async (values) => {
      try {
        console.log(values)
        const register = await axios.post("https://quer-server.herokuapp.com/register", values);
        console.log(values)
        
        alert(register.data.message);
        navigate("/form")
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
    <div className="body">
    <div className="container">
      <div className="col-4">
        <div className="row">
          <form  className="form" id="loginform" onSubmit={formik.handleSubmit}>
          <h2 className="topics">Query Ticket raising!! </h2>
            <div class="mb-3">
              <label for="username" class="form-label">
              <img className="logimage" src="https://cdn-icons-png.flaticon.com/512/4743/4743186.png"></img> UserName
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                autoComplete='off'
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
              <img className="logimage" src="https://cdn-icons-png.flaticon.com/512/2099/2099100.png"></img> email id
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
              <img className="logimage" src="https://cdn-icons-png.flaticon.com/512/2889/2889676.png"></img> Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>

            <div class="mb-3">
              <p class="form-label">
                already have account,
                <Link to="/">Click here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Register;
