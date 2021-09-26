import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../shared/provider/UserContext";
import RoutingPath from "../../routes/RoutingPath";
import classes from "./SignInView.module.css";

export const SignInView = () => {
  const history = useHistory();
  const [username, setUsername] = useState('Guest');
  const { setAuthenticatedUser } = useContext(UserContext);

  const login = () => {
    setAuthenticatedUser(username);
    localStorage.setItem("username", username);
    history.push(RoutingPath.showsView, {user: `Welcome back, ${username}`});
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Sign in!</h1>
      <label className={classes.label} htmlFor="text">Username: </label>
      <input
        className={classes.input}
        placeholder="Username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br />
      <button className={classes.button} onClick={() => login()}>Log in</button>
    </div>
  );
};
