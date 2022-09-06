import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const register = await axios.post(
          "http://localhost:5000/login",
          values
        );
        localStorage.setItem("react_app_token", register.data.token);
        navigate("/dashboard")
      
        // if (register.data.message === "User not found" ||"Password is incorrect" ) 
        // {
        //   if (register.data.message === "User not found") {
        //     alert("please do register");
        //   } 
        //   else{
        //     alert("check the password");
        //   }
        // }
        //   else{
        //   navigate("/form");
        // }
      
     } 
     catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <div className="col-4">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-3">
              <label for="username" class="form-label">
                UserName
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
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
                Don't have account,
                <Link to="/register">Click here</Link> to
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
