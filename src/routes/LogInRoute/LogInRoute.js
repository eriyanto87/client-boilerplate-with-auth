import React from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import { useHistory } from "react-router-dom";

export default function Signin() {
  let history = useHistory();

  const handleSignin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((signinReponse) => {
        TokenService.saveAuthToken(signinReponse.authToken);
        history.push("/dashboard");
      })
      .catch((res) => {
        console.log(res.error);
      });
  };

  return (
    <>
      <div className="signin-container">
        <section className="signin-header">
          <h1>Log In Form</h1>
        </section>
        <form onSubmit={(e) => handleSignin(e)}>
          <section className="signin-form">
            <p>
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
              />
            </p>
            <p>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </p>
          </section>
          <button>Sign In</button>
        </form>
      </div>
      <p className="signin-section">
        Don't have an account? <a href="/registration">Register Here</a>
      </p>
    </>
  );
}
