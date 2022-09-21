import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContxt";

function Form1() {
  const userContextData = useContext(UserContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      category: "",
      subcategory: "",
      language: "",
      querytitle: "",
      querydescription: "",
      timefrom: "",
      timetill: "",
      date: "",
      time: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.category) {
        errors.category = "Please enter category";
      }
      if (!values.subcategory) {
        errors.subcategory = "Please enter subcategory";
      }
      if (!values.language) {
        errors.language = "Please enter  any language";
      }
      if (!values.querytitle) {
        errors.querytitle = "Please enter query";
      }
      if (!values.querydescription) {
        errors.querydescription = "Please enter description";
      }
      if (!values.timefrom) {
        errors.emailid = "Please enter timeid";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        
        const data = await axios.post(
          "https://quer-server.herukoapp.com/form",
          values,
          {
            headers: {
              Authorization: `${localStorage.getItem("react_app_token")}`,
              
            },
          }
        );
        console.log(values);
        alert(data.data.message);
        navigate("/dashboard");

        //         setTimeout((async (values)=>{
        // const assign=await axios.get("https://quer-server.herokuapp.com/mentorassign",values)
        // console.log(assign)
        //         }),2000)
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="heading">Create Query</div>
        <div id="login">
          <p>
            <img
              className="image"
              src="https://cdn-icons-png.flaticon.com/512/3293/3293334.png"
            ></img>
            {userContextData.name}
          </p>
        </div>
      </nav>
      <button
        id="back"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <img
          className="back"
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
          alt="back"
        ></img>
        Back
      </button>
      <div className="forms">
        <div className="container-form">
          <div className="col-4">
            <div className="row">
              <form className="form" onSubmit={formik.handleSubmit}>
                <div className="topic">Topic</div>
                <label for="category" class="form-label">
                  category
                </label>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  onChange={formik.handleChange}
                  values={formik.values.category}
                >
                  <option id="category" name="category">
                    ---Select the category---
                  </option>
                  <option id="category" name="category" value="Zen class doudt">
                    Zen class doudt
                  </option>
                  <option
                    id="category"
                    name="category"
                    value="placement related"
                  >
                    Placement related
                  </option>
                  <option
                    id="category"
                    name="category"
                    value="Coordination related"
                  >
                    Coordination related
                  </option>
                  <option
                    id="category"
                    name="category"
                    value="Pre-boot camp related"
                  >
                    Pre-boot camp related
                  </option>
                </select>
                {formik.errors.category ? (
                  <span style={{ color: "red" }}>{formik.errors.category}</span>
                ) : null}
                {!formik.values.category ? (
                  ""
                ) : (
                  <div>
                    <label for="subcategory" class="form-label">
                      subcategory
                    </label>
                    <select
                      className="form-select"
                      id="subcategory"
                      name="subcategory"
                      onChange={formik.handleChange}
                      values={formik.values.subcategory}
                    >
                      <option
                        id="subcategory"
                        name="subcategory"
                        value=" ---Select the category---"
                      >
                        ---Select the subcategory---
                      </option>
                      <option id="subcategory" name="subcategory" value="task">
                        task
                      </option>
                      <option
                        id="subcategory"
                        name="subcategory"
                        value="placement"
                      >
                        placement
                      </option>
                      <option
                        id="subcategory"
                        name="subcategory"
                        value=" session time,link,feedback"
                      >
                        session time,link,feedback
                      </option>
                      <option
                        id="subcategory"
                        name="subcategory"
                        value="company info,portfolio,certificate"
                      >
                        company info,portfolio,certificate
                      </option>
                      <option
                        id="subcategory"
                        name="subcategory"
                        value="codekata"
                      >
                        codekata
                      </option>
                      <option
                        id="subcategory"
                        name="subcategory"
                        value="webkata"
                      >
                        webkata
                      </option>
                      <option
                        id="subcategory"
                        name="subcategory"
                        value="class topic"
                      >
                        classtopic
                      </option>
                      <option
                        id="subcategory"
                        name="subcategory"
                        value="assessment"
                      >
                        assessment
                      </option>
                    </select>
                  </div>
                )}

                <div class="form-group">
                  <label for="language" className="form-label">
                    {" "}
                    select communication language
                  </label>
                  <select
                    class="form-select"
                    id="language"
                    name="language"
                    onChange={formik.handleChange}
                    values={formik.values.language}
                  >
                    <option
                      id="language"
                      name="language"
                      value="select the language"
                    >
                      ---Select the language---
                    </option>
                    <option id="language" name="language" value="Tamil">
                      Tamil
                    </option>
                    <option id="language" name="language" value="English">
                      English
                    </option>
                    <option id="language" name="language" value="Hindi">
                      Hindi
                    </option>
                  </select>
                </div>
                <div className="topic">Details</div>
                <div class="mb-3">
                  <label for="querytitle" class="form-label">
                    querytitle
                  </label>
                  <select
                    className="form-select"
                    id="querytitle"
                    name="querytitle"
                    onChange={formik.handleChange}
                    values={formik.values.querytitle}
                  >
                    <option id="category" name="">
                      ---Select thequerytitle---
                    </option>
                    <option
                      id="querytitle"
                      name="querytitle"
                      value="javascript"
                    >
                      javascript
                    </option>
                    <option id="querytitle" name="querytitle" value="Reactjs">
                      Reactjs
                    </option>
                    <option id="querytitle" name="querytitle" value=" mongodb">
                      mongodb
                    </option>
                    <option id="querytitle" name="querytitle" value="sql">
                      sql
                    </option>
                    <option id="querytitle" name="querytitle" value=" nodejs">
                      nodejs
                    </option>
                    <option id="querytitle" name="querytitle" value="express">
                      express
                    </option>
                    <option id="querytitle" name="querytitle" value="html">
                      html
                    </option>
                    <option id="querytitle" name="querytitle" value="css">
                      css
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="querydescription" className="form-label">
                    querydescription
                  </label>
                  <textarea
                    class="form-control"
                    id="querydescription"
                    rows="5"
                    onChange={formik.handleChange}
                    value={formik.values.querydescription}
                    required
                  ></textarea>
                </div>
                <div className="topic">
                  Your available Time ? ( Ours : 9:00 AM - 7:00 PM )
                </div>
                <div class="mb-3">
                  <label for="timefrom" class="form-label">
                    timefrom
                  </label>
                  <input
                    type="time"
                    class="form-control"
                    id=" timefrom"
                    name="timefrom"
                    onChange={formik.handleChange}
                    value={formik.values.timefrom}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="timetill" class="form-label">
                    timetill
                  </label>
                  <input
                    type="time"
                    class="form-control"
                    id=" timetill"
                    name="timetill"
                    onChange={formik.handleChange}
                    value={formik.values.timetill}
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    id="button"
                    class="btn btn-primary mr-3"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  {/* <input
                    type="submit"
                    id="button"
                    value="submit"
                    class="btn btn-primary mr-3"
                    // onSubmit={formik.handleSubmit} */}
                  {/* /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form1;
