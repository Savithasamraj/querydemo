import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";
import UserContext from "./UserContxt";
import "./Component.css";
import "./style.css";
import Adminportal from "./Adminportal";
function Admin() {
  const userContextData = useContext(UserContext);
  const navigate = useNavigate();
  const navigate1 = () => {
    navigate("/adminportal");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "name is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const Admin = await axios.post(
          "https://quer-server.herokuapp.com/admin",
          values
        );
        // localStorage.setItem("react_app_token", Admin.data.token);
        // localStorage.setItem("react_app_token", Admin.data.name);
        userContextData.setadmin(values.name);

        alert(` Hello  ${values.name}  
                  ${Admin.data.message}`);
        if (Admin.data.message === "Successfully logged in") {
          navigate1("/adminportal");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <nav class="navbar navbar-light bg-dark">
        <div id="login">
          <button
            id="backs"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              className="back"
              src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
              alt="back"
            ></img>
            Back
          </button>
        </div>
      </nav>
      <div className="body">
        <h2 className="titlehead">Admin login</h2>
        <div className="container">
          <div className="col-4">
            <div className="row">
              <form
                className="form"
                id="Adminform"
                onSubmit={formik.handleSubmit}
              >
                <h2 className="topics">Query Ticket raising !!</h2>

                <div class="mb-3">
                  <label for="name" class="form-label">
                    <img
                      className="logimage"
                      src="https://cdn-icons-png.flaticon.com/512/4743/4743186.png"
                    ></img>{" "}
                    name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
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
                <div class="mb-3">
                  <label for="email" class="form-label">
                    <img
                      className="logimage"
                      src="https://cdn-icons-png.flaticon.com/512/2099/2099100.png"
                    ></img>{" "}
                    email id
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Enter email"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Admin;
