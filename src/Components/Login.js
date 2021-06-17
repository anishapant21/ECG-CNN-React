import React from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';


const Login = () => {
  //for the form
  const { register, handleSubmit } = useForm();
  //for routing
  const history=useHistory();
  const OnSubmit = (data) => {
    history.push({
      pathname: "/main",
      state:{detail: data}
    });

  };

  return (
    <div className="ui two column grid container">
      <div className="column">
        <div
          style={{ minWidth: "800px", top: "150px", left: "10px" }}
          className="ui card"
        >
          <img
            className="ui fluid image"
            src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/10/cardiacDocs-1125401691-770x553.jpg"
          />
        </div>
      </div>

      <div className="column">
        <div
          style={{
            minWidth: "400px",
            minHeight: "554px",
            left: "233px",
            top: "150px",
          }}
          className="ui red raised card"
        >
          <div
            style={{ marginTop: "60px" }}
            className="ui center aligned huge header"
          >
            {" "}
            Login
          </div>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <div className="ui form">
              <div
                style={{
                  marginLeft: "20px",
                  marginRight: "30px",
                  fontSize: "17px",
                }}
                className="field"
              >
                <label>Name</label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Ann"
                  ></input>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "20px",
                  marginRight: "30px",
                  fontSize: "17px",
                }}
                className="field"
              >
                <label>Age</label>
                <div className="ui left icon input">
                  <input
                    type="number"
                    {...register("age")}
                    placeholder="22"
                  ></input>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "20px",
                  marginRight: "30px",
                  fontSize: "17px",
                }}
                className="field"
              >
                <label>Email</label>
                <div className="ui left icon input">
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="email@example.com"
                  ></input>
                </div>
              </div>
            </div>

            <button
              style={{
                marginLeft: "50px",
                marginRight: "30px",
                marginTop: "40px",
                maxWidth: "300px",
                fontSize: "17px",
              }}
              className="ui teal button"
              type="submit"
              value="submit"
            >
              {" "}
              Log in{" "}
            </button>
          </form>
          <div
            style={{
              marginTop: "80px",
              marginLeft: "140px",
              fontFamily: "cursive",
              fontSize: "18px",
            }}
            className="meta"
          >
            "In heart, we care"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
