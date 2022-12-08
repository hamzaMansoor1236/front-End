import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  var [postsArr, setpostsARR] = useState([]);
  const navigate = useNavigate();
  var [username, setUserName] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    

    const headers = { "Content-Type": "application/json" };
    fetch(`http://localhost:3001/posts`, { headers })
      .then((response) => response.json())
      .then((data) => {
        setpostsARR(data);

        console.log(postsArr);
      });
  }, []);

  function dealClick(e)
  {
    const id = e.currentTarget.getAttribute("rowid");
    console.log(id);

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
            className="btn btn-success navbar-btn"
            onClick={() => {
              navigate("/createpost");
            }}
          >
            Create Post
          </button>
          <button
            className="btn btn-success navbar-btn"
            onClick={() => {
              navigate("/updatepost");
            }}
          >
            Update Post
          </button>
          <button
            className="btn btn-danger navbar-btn"
            onClick={() => {
              navigate("/deletepost");
            }}
          >
            Delete Post
          </button>
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
      <h3 className="mx-2 text-primary">List of Posts</h3>
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
          </tr>
        </thead>
        <tbody>
          {postsArr.map((posts) => (
            <tr key={posts.id}  rowid={posts.id} onClick={(e)=>{dealClick(e)}}>
              <td>
                <b>{posts.id}</b>
              </td>
              <td>
                <b>{posts.post_title}</b>
              </td>
              <td> {posts.post_body}</td>
              <td> {posts.user_name} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
