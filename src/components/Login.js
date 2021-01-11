import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import google from "./assets/images/google.jpg";
import outlook from "./assets/images/outlook.png";
import linkedin from "./assets/images/linkedin.png";
import oneburner from "./assets/images/oneburner.png";

export default function Login({ history }) {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
    checked: true,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  function handleClickShowPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function handleMouseDownPassword(event) {
    event.preventDefault();
  }
  return (
    <div className="login-container">
      <header className="login-header">
        <img src={oneburner} alt="logo" height="80px" width="80px" />
        <span>
          <strong style={{ color: "#800080", fontSize: "20px" }} onClick={() => history.push("/")}>
            Oneburner
          </strong>
        </span>
        <div className="left-links">
          <div className="new-customer" onClick={() => history.push("/contact")}>
            New Customer ?
          </div>
          <div className="try" onClick={() => history.push("/contact")}>
            Try For Free<span style={{ marginLeft: "10px", fontSize: "20px" }}>&gt;</span>
          </div>
        </div>
      </header>
      <div className="login-form">
        <div className="form-header">
          <h1>Sign In</h1>
          <p>Welcome Back</p>
        </div>
        <form className="form">
          <div className="email">
            <p>Email / Username</p>
            <input type="text" required onChange={handleChange} name="email" />
          </div>
          <div className="password">
            <p>Password</p>
            <div className="icon-input">
              <input
                type="password"
                required
                onChange={handleChange}
                id="password"
                name="password"
              />
              <div className="eye">
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              </div>
            </div>
          </div>

          <input type="submit" value="Log In" className="btn" />
          <div className="forgot-password">
            <label>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                name="checked"
                color="#800080"
                onChange={handleChange}
              />
              <span>Remember me</span>
              <div></div>
            </label>
            <span className="ml-auto">
              <a href="#/" className="forgot-pass">
                Forgot Password?
              </a>
            </span>
          </div>

          <div className="signin-with"> or sign in with</div>
          <div class="social-login">
            <img src={outlook} height="50px" alt="outlook" />
            <img src={linkedin} height="50px" alt="linkdin" className="linkdin" />
            <img src={google} height="50px" alt="google" />
          </div>
        </form>
      </div>
    </div>
  );
}
