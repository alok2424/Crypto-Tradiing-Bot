import React, { useState, useEffect } from "react";

const SignUp = ({ axios, setActiveComponent ,notifyError,notifySuccesss}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleFormFileChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const createAccount = async (e) => {
    e.preventDefault();
    if (
      user.name == "" ||
      user.email == "" ||
      user.password == "" ||
      user.passwordConfirm == ""
    ) {
      return notifyError("Please provide all the details");
    }
    notifySuccesss("wait creating account...");

    try {
      //Api call
    } catch (error) {}
  };
    return (
      <div className="techwave_fn_sign">
        <div className="sign__content">
          <h1 className="logo">Designed by alok</h1>
          <form className="login">
            <div className="form__content">
              <div className="form__title">SignUp</div>
              <div className="form__username">
                <label htmlFor="user_login">Name</label>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => handleFormFileChange("name", e)}
                ></input>
              </div>

              <div className="form__username">
                <label htmlFor="user_login">Email</label>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => handleFormFileChange("Email", e)}
                ></input>
              </div>

              <div className="form__username">
                <label htmlFor="user_login">Password</label>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => handleFormFileChange("password", e)}
                ></input>
              </div>

              <div className="form__username">
                <label htmlFor="user_login">ConfirmPassword</label>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => handleFormFileChange("passwordConfirm", e)}
                ></input>
              </div>
   
              <div className="form__alternative">
              <a onClick={(e)=>createAccount(e)}
              className="techwave_fn_button"
              >
              <span>Create Account</span>
              </a>
              </div>

              <div></div>
            </div>
          </form>

          <div className="sign__desc">
          <p>
          Not a member?
          <a onClick={()=>setActiveComponent("Login")}>
          Login
          </a>
          </p>
          </div>
        </div>
      </div>
    );
  };

export default SignUp;
