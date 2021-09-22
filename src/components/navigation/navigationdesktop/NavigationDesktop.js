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
    <div className="navbar">
      <div className="container">
        <nav className="nav">
          <ul className="navbar__ul">
            <li onClick={() => history.push(RoutingPath.homeView)}>Home</li>
            {authenticatedUser ? (
              <div className="nav-loggedin">
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
