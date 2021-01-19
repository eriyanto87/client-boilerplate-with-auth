import React from "react";
import TokenService from "../../services/token-service";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  let history = useHistory();

  const logout = () => {
    TokenService.clearAuthToken();
    history.push("/");
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
}
