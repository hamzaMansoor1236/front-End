function UpdateUser() {
  var id = "";
  var naam = "";
  var email = "";
  var userArr = [];
  const user = {
    id: "",
    user_name: "",
    email: "",
  };

  function updateUser() {

    console.log(document.getElementById("id").value );
    console.log(document.getElementById("naam").value );
    console.log(document.getElementById("email").value );

      user.id=document.getElementById("id").value;
      user.user_name=document.getElementById("naam").value;
      user.email=document.getElementById("email").value;

      
    

    
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
        // document.getElementById("id").value = "";
        // document.getElementById("naam").value = "";
        // document.getElementById("email").value = "";
        
      });
  }

  function getUser() {
    console.log("hellow world");

    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3001/users", { headers })
      .then((response) => response.json())
      .then((data) => {
        userArr = data;

        id = document.getElementById("id").value;

        for (let i = 0; i < userArr.length; i++) {
          if (userArr[i].id === id) {
            naam = userArr[i].user_name;
            email = userArr[i].email;
          }
        }

        console.log(id);
        console.log(naam);
        console.log(email);

        document.getElementById("naam").value = naam;
        document.getElementById("email").value = email;
      });
  }

  return (
    <div className="container mt-5 border border-primary">
      <h1>Update user</h1>
      <br></br>
      <div>
        <label>Enter ID to be Updated </label>
        <input
          type="number"
          className="form-control"
          id="id"
          placeholder="Enter Your ID "
        />
      </div>
      <br></br>
      <div>
        <button className="btn btn-primary" onClick={getUser}>
          Get User
        </button>
      </div>
      <br></br>
      <div>
        <label>Name of User</label>
        <input
          type="text"
          className="form-control"
          id="naam"
          placeholder="Enter Username"
        />
        <br></br>
      </div>
      <br></br>
      <div>
        <label>Email address of User</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>

      <br></br>
      <div>
        <button className="btn btn-primary" onClick={updateUser}> Update User</button>
      </div>
      <br></br>
    </div>
  );
}

export default UpdateUser;
