import React , {useState, useEffect} from 'react'

const Login = ({setActiveComponent, axios,notifyError,notifySuccesss }) => {
  const [user, setUser] = useState({
    password: "",
    passwordConfirm: "",
  });
  
  const handleFormFileChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const apiLogin = async (e) =>{
    e.preventDefault();
    if(
      user.email == "" ||
      user.password == "" 
    ){
      return notifyError("Please provide all the details");
    }
    notifySuccesss("wait creating account...");
  }
  return (
    <div className="techwave_fn_sign">
    <div className="sign__content">
      <h1 className="logo">Designed by alok</h1>
      <form className="login">
        <div className="form__content">
          <div className="form__title">SignIn</div>

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

          
          <div className="form__alternative">
          <a onClick={(e)=>apiLogin(e)}
          className="techwave_fn_button">
          <span>Login</span>
          </a>
          </div>

          <div></div>
        </div>
      </form>

      <div className="sign__desc">
      <p>
      Not a member?
      <a onClick={()=>setActiveComponent("SignUp")}>
      Login
      </a>
      </p>
      </div>
    </div>
  </div>
  )
}

export default Login
