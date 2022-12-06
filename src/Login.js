import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  

  const navigate = useNavigate();
  const user = {
    id: "",
    user_name: "",
    email: "",
    password: "",
  };

  var userArr = [];
  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3001/users", { headers })
      .then((response) => response.json())
      .then((data) => {
        userArr = data;
      });
  }, []);

  var found = false;

  function verify() {
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;

    if (user.email && user.password) {
      for (var i = 0; i < userArr.length; i++) {
        if (
          userArr[i].email == user.email &&
          userArr[i].password == user.password
        ) {
          user.id = userArr[i].id;
          user.user_name = userArr[i].user_name;

          found = true;
          
          localStorage.setItem("username", user.user_name);
          localStorage.setItem("id", user.id);

        }
      }
    }

    if (found) {
      alert("You have successfully logged in");
      navigate("/home");
    } else {
      alert("Please Enter Valid Credentials");
    }
  }

  return (
    <div className="container mt-5 border border-primary">
      <h1 className="text-primary">Login to Your Account</h1>
      <br></br>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
        />
      </div>

      <br></br>
      <div>
        <button className="btn btn-primary custom" onClick={verify}>
          Login
        </button>

        <button
          className="btn btn-primary mx-3 custom"
          onClick={() => {
            navigate("/SignUp");
          }}
        >
          Sign Up
        </button>
      </div>
      <br></br>
    </div>
  );
}

export default Login;
