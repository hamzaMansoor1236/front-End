import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function CreatePost() {
  var navigate = useNavigate();
  var [username,setUserName]=useState("");
  var [id,setId]=useState("");

  
  const post = {
    id: "",
    user_id:"",
    user_name: "",
    post_title: "",
    post_body: ""
  };
  
  useEffect(() => {

    
    setUserName(localStorage.getItem('username'));
    setId(localStorage.getItem('id'));


    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3001/posts", { headers })
      .then((response) => response.json())
      .then((data) => {
       
        post.id=data.length+1;

        console.log(post.id);
      });
  }, []);

  function CreatePost() {
   

   
    post.user_id=id;
    post.user_name=username;


    post.post_title = document.getElementById("postTitle").value;
    post.post_body=document.getElementById("postBody").value;

   

   
   

    if(post.post_title&&post.post_body){
      fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((info) => {
          console.log("Response from server" + info);
          
          
          
         
  
        
        });
        alert("Post Creation Successful")
        navigate('/home');

    }
    else{
      alert("Please fill the fields")
    }




  }



  return (
    <div className="container mt-3 ">
           <nav className="navbar navbar-inverse border border-secondary ">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">
              <b><span className="customWelcome">Welcome</span> <span className="customcolor"><u>{username}</u></span></b>
            </a>
            
          </div>
          
          <button className="btn btn-danger navbar-btn custom" onClick={ ()=>{
             localStorage.clear();
             navigate("/");}}>Logout</button>
        </div>
      </nav>
      <br></br>
      <h3 className="text-primary">Create post</h3>
      
      <div>
        <label>
          <b>Post Title</b>
        </label>
        <textarea
          className="form-control"
          id="postTitle"
          rows="2"
        ></textarea>
      </div>

      <div className="form-group">
        <label ><b>Post body</b></label>
        <textarea
          className="form-control"
          id="postBody"
          rows="6"
        ></textarea>
      </div>

      <br></br>
      <div>
      <button className="btn btn-success navbar-btn"  onClick={CreatePost} >Create Post</button>
      <button className="btn btn-success navbar-btn mx-4"  onClick={()=>{navigate("/home");}} >Back to Posts</button>

      </div>
      <br></br>
    </div>
  );
}

export default CreatePost;
