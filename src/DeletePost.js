import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function DeletePost() {
  var [postsArr, setpostsARR] = useState([]);
  const navigate = useNavigate();
  var [username, setUserName] = useState("");
  var [id, setId] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    setId(localStorage.getItem("id"));

    const headers = { "Content-Type": "application/json" };
    fetch(`http://localhost:3001/posts`, { headers })
      .then((response) => response.json())
      .then((data) => {
        setpostsARR(data);

        console.log(postsArr);
      });
  }, []);

  function dealClick(e) {
    let a = document.getElementById("postid").value;
    console.log(a);

    if (a ) {
      var found = 0;
      for (let i = 0; i < postsArr.length; i++) {
        if (postsArr[i].user_id === id &&  parseInt (postsArr[i].id) === parseInt(a)) {
          found = 1;
          i = postsArr.length + 2;
        }
      }

      if (found) {
        fetch("http://localhost:3001/posts/" + a, {
          method: "DELETE",
        }).then((res) => {
          if (res.statusText === "Not Found") {
            alert("Please enter a valid id");
          } else {
          }
        }); // or res.json()

        alert("The Post deleted successfully");
        navigate("/home")
      } else {
        alert("Please enter the Id field from the table below ");
      }
    }
    else{
        alert("Please Enter the id ")
    }
  }
  return (
    <div className="container mt-3 ">
      <nav className="navbar navbar-inverse border border-secondary">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <b>
                <span className="customWelcome">Welcome</span>{" "}
                <span className="customcolor">
                  <u>{username}</u>
                </span>
              </b>
            </a>
          </div>
         
        
        
          <button
            className="btn btn-dark navbar-btn custom"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      <br></br>

      <div>
        <label><b>Enter the id</b></label>
        <input
          type="number"
          className="form-control"
          id="postid"
          placeholder="Enter id"
        />
      </div>
      <br></br>
      <button className="btn btn-danger navbar-btn" onClick={dealClick}>
        Delete Post
      </button>
      <button
            className="btn btn-primary navbar-btn custom mx-3"
            onClick={() => {
              navigate("/home");
            }}
          >
            Back
          </button>
      <br></br>
      <br></br>
      <br></br>
      <h3 className="mx-2 text-primary">List of your Posts</h3>
      <table className="table  table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" className="text-info">
              Id
            </th>
            <th scope="col" className="text-info">
              Post Title
            </th>
            <th scope="col" className="text-info">
              Post Body
            </th>
            <th scope="col" className="text-info">
              Author
            </th>
            <th scope="col" className="text-info">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {postsArr.map((posts) =>
            posts.user_id === id ? (
              <tr key={posts.id} rowid={posts.id}>
                <td>
                  <b>{posts.id}</b>
                </td>
                <td>
                  <b>{posts.post_title}</b>
                </td>
                <td> {posts.post_body}</td>
                <td> {posts.user_name} </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DeletePost;
