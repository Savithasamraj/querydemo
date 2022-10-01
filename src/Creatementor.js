import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Component.css";
function Creatementor() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      number: "",
      address: "",
      address1: "",
      city: "",
      subject: "",
      experience: "",
    },
    onSubmit: async (values) => {
      try {
        const data = await axios.post(
          "https://quer-server.herokuapp.com/mentor",
          values
        );
        alert(data.data.message);
        if (data.data.message === "mentor created") {
          navigate("/adminportal");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div class="container-lg" id="mentor">
          <div class="row">
            <div class="col ">
              <div class="form-group col  ">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  values={formik.values.name}
                />
              </div>
            </div>
            <div class="col">
              <div class="form-group col">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter the Password"
                  onChange={formik.handleChange}
                  values={formik.values.password}
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="col">
                <div class="form-group col">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder=" Enter the Email"
                    onChange={formik.handleChange}
                    values={formik.values.email}
                  />
                </div>
              </div>
            </div>

            <div class="col">
              <div class="form-group col">
                <label for="number" class="form-label">
                  Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="number"
                  name="number"
                  placeholder="Enter your number"
                  onChange={formik.handleChange}
                  values={formik.values.number}
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="address" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  name="address"
                  placeholder="enter the address"
                  onChange={formik.handleChange}
                  values={formik.values.address}
                />
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="address1" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address1"
                  placeholder="Apartment, studio, or floor"
                  onChange={formik.handleChange}
                  values={formik.values.address1}
                />
              </div>
            </div>
            <div class="col">
              <div class="form-group col-md-6">
                <label for="city" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  onChange={formik.handleChange}
                  values={formik.values.city}
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group col-md-4">
                <label for="subject" class="form-label">
                  subject
                </label>
                <select
                  id="subject"
                  class="form-control"
                  name="subject"
                  onChange={formik.handleChange}
                  values={formik.values.subjec}
                >
                  <option for="subject" id="subject" name="subject">
                    ---Select the subject---
                  </option>
                  <option for="subject" id="subject" name="task" value="task">
                    task
                  </option>
                  <option
                    for="subject"
                    id="subject"
                    name="placement"
                    value="placement"
                  >
                    placement
                  </option>
                  <option
                    for="subject"
                    id="subject"
                    name="subject"
                    value="session time,link,feedback"
                  >
                    session time,link,feedback
                  </option>
                  <option
                    for="subject"
                    id="subject"
                    name="company info,portfolio,certificate"
                    value=" company info,portfolio,certificate"
                  >
                    company info,portfolio,certificate
                  </option>
                  <option
                    for="subject"
                    id="subject"
                    name="codekata"
                    value="codekata"
                  >
                    codekata
                  </option>
                  <option
                    for="subject"
                    id="subject"
                    name="webkata"
                    value="webkata"
                  >
                    webkata
                  </option>
                  <option
                    for="subject"
                    id="subject"
                    name="classtopic"
                    value="class topic"
                  >
                    class topic
                  </option>
                  <option
                    for="subject"
                    id="subject"
                    name="assesment"
                    value="assessment"
                  >
                    assessment
                  </option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="form-group col-md-4">
                <label for="experince" class="form-label">
                  Experience
                </label>
                <select
                  id="experince"
                  class="form-control"
                  onChange={formik.handleChange}
                  values={formik.values.experience}
                >
                  <option for="experince" id="experince">
                    ---no of years---
                  </option>
                  <option for="experince" id="experince" value="0-1">
                    0-1
                  </option>
                  <option for="experince" id="experince" value="2">
                    2
                  </option>
                  <option for="experince" id="experince" value="3">
                    3
                  </option>
                  <option for="experince" id="experince" value="4">
                    4
                  </option>
                  <option for="experince" id="experince" value="5">
                    5&more
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-primary mr-3">
              Create
            </button>
            <button
              type="submit"
              id="button"
              class="btn btn-primary mr-3"
              onClick={() => {
                navigate("/adminportal");
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Creatementor;
