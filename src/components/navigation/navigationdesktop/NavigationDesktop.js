import { useContext } from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserContext";
import "./NavigationDesktop.css";

export const NavigationDesktop = () => {
  const { authenticatedUser, setAuthenticatedUser } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    setAuthenticatedUser(false);
    localStorage.removeItem("username");
    history.goBack();
  };

  return (
    <div className="container">
      <div className="navbar">
        <ul className="navbar__ul">
          <li onClick={() => history.push(RoutingPath.homeView)}>Home</li>
          <li onClick={() => history.push(RoutingPath.favouriteView)}>
            Favourites
          </li>
          {authenticatedUser ? (
            <li onClick={() => logout()}>Logout</li>
          ) : (
            <li onClick={() => history.push(RoutingPath.signInView)}>Login</li>
          )}
        </ul>
      </div>
    </div>
  );
};
