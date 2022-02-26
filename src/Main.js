import React, { useState } from "react";
import validator from "react"; //for verifying email

const Main = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [eusername, seteusername] = useState("");
  const [eemail, seteemail] = useState("");
  const [epassword, setepassword] = useState("");
  const [ecpassword, setecpassword] = useState("");

  const [ucolor, setucolor] = useState("");
  const [ecolor, setecolor] = useState("");
  const [pcolor, setpcolor] = useState("");
  const [cpcolor, setcpcolor] = useState("");

  const [passwordShown, setpasswordShown] = useState(false);
  const [confirmPasswordShown, confirmSetpasswordShown] = useState(false);

  function validate() {
    if (username.length > 7) {
      seteusername("");
      setucolor("green");
    } else {
      seteusername("username must be 8 characters long");
      setucolor("red");
    }

    // if (validator.isEmail(email)) {
    //   console.log(email);
    //   seteemail("");
    //   setecolor("green");
    // } else {
    //   seteemail("email should have @ and .com");
    //   setecolor("red");
    // }
    if (email.includes(".com") && email.includes("@")) {
      seteemail("");
      setecolor("green");
    } else {
      seteemail("email must contain '.com' & '@'");
      setecolor("red");
    }

    const pass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(pass)) {
      setepassword("");
      setpcolor("green");
    } else {
      setepassword(
        "password must be 8 to 15 characters long & contain at least 1 lowercase & 1 uppercase letter, 1 numeric digit & 1 special character"
      );
      setpcolor("red");
    }

    if (password != "" && password === cpassword) {
      setecpassword("");
      setcpcolor("green");
    } else {
      setecpassword("password not matched");
      setcpcolor("red");
    }
  }

  function togglePassword() {
    setpasswordShown(!passwordShown);
  }

  function confirmTogglePassword() {
    confirmSetpasswordShown(!confirmPasswordShown);
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h1>Form Validation</h1>
          <input
            type="text"
            placeholder="username"
            className="form-control"
            style={{ borderColor: ucolor }}
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <p>{eusername}</p>
          <input
            type="text"
            placeholder="email"
            className="form-control"
            style={{ borderColor: ecolor }}
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <p>{eemail}</p>
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="password"
            className="form-control"
            style={{ borderColor: pcolor }}
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <input type="checkbox" onClick={togglePassword} />
          Show Password
          <p>{epassword}</p>
          <input
            type={confirmPasswordShown ? "text" : "password"}
            placeholder="confirm password"
            className="form-control"
            style={{ borderColor: cpcolor }}
            value={cpassword}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
          />
          <input type="checkbox" onClick={confirmTogglePassword} />
          Show Password
          <p>{ecpassword}</p>
          <button className="btn btn-success" onClick={validate}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
