import { useContext } from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserContext";
import classes from "./NavigationDesktop.module.css";

export const NavigationDesktop = () => {
  const { authenticatedUser, setAuthenticatedUser } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    setAuthenticatedUser(false);
    localStorage.removeItem("username");
    history.goBack();
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <ul className={classes.navbar__ul}>
            <li onClick={() => history.push(RoutingPath.homeView)}>Home</li>
            {authenticatedUser ? (
              <div className={classes.nav__loggedin}>
                <li onClick={() => history.push(RoutingPath.showsView)}>
                  Shows
                </li>
                <li onClick={() => logout()}>Logout</li>
              </div>
            ) : (
              <li onClick={() => history.push(RoutingPath.signInView)}>Login</li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
