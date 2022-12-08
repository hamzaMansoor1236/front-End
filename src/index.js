import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CreatePost from "./CreatePost";
import SignUp from "./SignUp";

import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/SignUp" element={<SignUp></SignUp>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/createpost" element={<CreatePost></CreatePost>}></Route>
        <Route path="/updatepost" element={<UpdatePost></UpdatePost>} />
        <Route path="/deletepost" element={<DeletePost></DeletePost>} />
        <Route path="*" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
