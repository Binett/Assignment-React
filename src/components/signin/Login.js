import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../shared/provider/UserContext";

export const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const {setAuthenticatedUser} = useContext(UserContext);

  const login = () => {
    setAuthenticatedUser(username);
    localStorage.setItem("username", username);
    history.goBack();
  };

  return (
    <div>
      <h1>Sign in!</h1>
      <input
        placeholder="Username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br />
      <button onClick={() => login()}>Log in</button>
    </div>
  );
};
