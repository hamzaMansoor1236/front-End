import "./App.css";
import { useEffect, } from "react";
import { useNavigate} from 'react-router-dom';
import "./App.css";




function SignUp() {


  
  const user = {
    id: "",
    user_name: "",
    email: "",
    password: ""
  };
  
  const navigate = useNavigate();



  useEffect(() => {

    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3001/users", { headers })
      .then((response) => response.json())
      .then((data) => {
        

        document.getElementById("id").value=data.length+2;
        
        
      });
  
}, []);










 
 
 

  function Create() {
   

    user.id = document.getElementById("id").value;
    user.user_name = document.getElementById("naam").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;


    if(user.user_name&&user.email&&user.password){
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((info) => {
          console.log("Response from server" + info);

        });
        alert("Sign Up Successful")
        navigate('/');

    }
    else{
      alert("Please fill the fields")
    }




  }

  return (
    <div className="container mt-5 border border-primary">
      <h1 className="text-primary">Sign Up</h1>
      <br></br>
      <div>
        <label>ID </label>
        <input
          type="number"
          className="form-control"
          id="id"
          
          disabled
         
        />
      </div>
      <br></br>
      <div>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          id="naam"
          placeholder="Enter Username"
        />
      </div>
      <br></br>
      <div>
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <br></br>

      <div>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter Password"
        />
      </div>

      <br></br>
      <div>
        <button className="btn btn-primary custom" onClick={Create}>
          Sign Up
        </button>

        <button className="btn btn-primary mx-3 custom" onClick={()=>{navigate("/");}}>
          Login
        </button>
      </div>
      <br></br>
     
    </div>
  );
}

export default SignUp;
