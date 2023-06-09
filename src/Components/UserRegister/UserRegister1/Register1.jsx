import React from "react";
import "./Register1.css";

import { GoogleLogin } from "react-google-login";

function UserRegister1({ signUpData, setSignUpData, fieldErrors }) {
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setSignUpData((prev) => {
      let data = { ...prev };
      data[name] = value;
      return data;
    });
  };
  const handleGoogleLogin = (googleUser) => {
    setSignUpData((prev) => {
      let data = { ...prev };
      data.fullname = googleUser.wt.Ad;
      data.email = googleUser.wt.cu;
      return data;
    });
  };
  const handleGoogleLoginFailure = (error) => {
    console.log("Google Login Error:", error);
  };

  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <div className="left-side-title">
            <h2>Remote jobs with leading brands.</h2>
          </div>
          <div>
            <div className="left-side-description">
              <svg
                data-v-aa013a8a=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11.625"
                  stroke="#56C288"
                  stroke-width="0.75"
                ></circle>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.3124 8.21877C17.5402 8.44658 17.5402 8.81593 17.3124 9.04373L10.5749 15.7812C10.3471 16.009 9.97776 16.009 9.74996 15.7812L6.68746 12.7187C6.45965 12.4909 6.45965 12.1216 6.68746 11.8938C6.91526 11.666 7.28461 11.666 7.51241 11.8938L10.1624 14.5438L16.4875 8.21877C16.7153 7.99097 17.0846 7.99097 17.3124 8.21877Z"
                  fill="#F4F5FF"
                ></path>
              </svg>
              <p>Long-term remote jobs</p>
            </div>
            <div className="left-side-description">
              <svg
                data-v-aa013a8a=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11.625"
                  stroke="#56C288"
                  stroke-width="0.75"
                ></circle>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.3124 8.21877C17.5402 8.44658 17.5402 8.81593 17.3124 9.04373L10.5749 15.7812C10.3471 16.009 9.97776 16.009 9.74996 15.7812L6.68746 12.7187C6.45965 12.4909 6.45965 12.1216 6.68746 11.8938C6.91526 11.666 7.28461 11.666 7.51241 11.8938L10.1624 14.5438L16.4875 8.21877C16.7153 7.99097 17.0846 7.99097 17.3124 8.21877Z"
                  fill="#F4F5FF"
                ></path>
              </svg>
              <p>Friendly community</p>
            </div>
            <div className="left-side-description">
              <svg
                data-v-aa013a8a=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11.625"
                  stroke="#56C288"
                  stroke-width="0.75"
                ></circle>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.3124 8.21877C17.5402 8.44658 17.5402 8.81593 17.3124 9.04373L10.5749 15.7812C10.3471 16.009 9.97776 16.009 9.74996 15.7812L6.68746 12.7187C6.45965 12.4909 6.45965 12.1216 6.68746 11.8938C6.91526 11.666 7.28461 11.666 7.51241 11.8938L10.1624 14.5438L16.4875 8.21877C16.7153 7.99097 17.0846 7.99097 17.3124 8.21877Z"
                  fill="#F4F5FF"
                ></path>
              </svg>
              <p>Awesome Support! We've got your back!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-form">
          <div className="form">
            <h1>Let's get started</h1>
            <div className="signup-buttons">
              {/* <div className="signup-button">
                <GoogleLogin
                  clientId="735872497830-brt36pujgllrac6js688mtt6simebkio.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={handleGoogleLogin}
                  onFailure={handleGoogleLoginFailure}
                  cookiePolicy={"single_host_origin"}
                  scope="profile 
                    email
                    https://www.googleapis.com/auth/user.birthday.read
                    https://www.googleapis.com/auth/user.gender.read
                    https://www.googleapis.com/auth/user.addresses.read"
                />
              </div> */}
            </div>
            <div className="line-separator"></div>
            <p>Use your Email Adress</p>
            <form>
              <div className="form-group">
                <label
                  style={fieldErrors["fullname"] && { color: "red" }}
                  className="form-label"
                >
                  Fullname{" "}
                </label>
                <input
                  style={
                    fieldErrors[`fullname`] && {
                      backgroundImage:
                        "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                    }
                  }
                  className="form-input"
                  type="text"
                  name="fullname"
                  value={signUpData.fullname}
                  onChange={(e) => handleChange(e)}
                />
                {fieldErrors[`fullname`] && (
                  <span style={{ color: "red" }}>
                    {fieldErrors[`fullname`]}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label
                  style={fieldErrors["email"] && { color: "red" }}
                  className="form-label"
                >
                  Email{" "}
                </label>
                <input
                  style={
                    fieldErrors[`email`] && {
                      backgroundImage:
                        "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                    }
                  }
                  className="form-input"
                  type="email"
                  name="email"
                  value={signUpData.email}
                  onChange={(e) => handleChange(e)}
                />
                {fieldErrors[`email`] && (
                  <span style={{ color: "red" }}>{fieldErrors[`email`]}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister1;
