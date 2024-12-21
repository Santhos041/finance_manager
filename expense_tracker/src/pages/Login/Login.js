import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/Login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
           navigate("/Dashboard");
          } else if (res.data === "notexist") {
            alert("User have not signed up");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="log_form">
      <form action="POST">
        <div className="log_det">
          <h1>
            <u>Login</u>
          </h1>

          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            id="email"
            name="email"
          />
          <br />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            id="password"
            name="password"
          />
          <br />
          <button type="submit" onClick={submit}>
            Login
          </button>
          <h5>
            Don't have an account?<Link to="/Signup"> Signup </Link>
          </h5>
        </div>
      </form>
    </div>
  );
}
export default Login;
