import React from "react";
import AuthApiService from "../../services/auth-api-service";
import { useHistory } from "react-router-dom";

export default function Registration() {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("register button works");

    const { username, password, fullname } = e.target;

    const postUserData = {
      username: username.value,
      password: password.value,
      name: fullname.value,
    };

    console.log(postUserData);

    AuthApiService.postUser(postUserData)
      .then((user) => {
        history.push("/login");
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="registration-container">
        <section className="registration-header">
          <h1>Register</h1>
          <p>Create your account. It's free and only takes a minute!</p>
        </section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <section className="name">
            <p>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="fullname"
                required
              />
            </p>
          </section>
          <section className="registration-info">
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
          <button>Register Now</button>
        </form>
      </div>
      <p className="login-section">
        Already have an account? <a href="/login">Sign In</a>
      </p>
    </>
  );
}
