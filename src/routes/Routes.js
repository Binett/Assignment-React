import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ShowsView } from "../views/showsview/ShowsView";
import { HomeView } from "../views/homeview/HomeView";
import { SignInView } from "../views/signinview/SignInView";
import { SearchView } from '../views/searchView/SearchView'
import { UserContext } from "../shared/provider/UserContext";
import RoutingPath from "./RoutingPath";
import { InfoView } from "../views/infoView/InfoView";

export const Routes = (props) => {
  const { authenticatedUser, setAuthenticatedUser } = useContext(UserContext);
  
  const isUserAuthenticated = () =>{
    const userFromLocal = localStorage.getItem("username")
    setAuthenticatedUser(userFromLocal)
  }

  const blockIfAuthenticated = (view) => (authenticatedUser ? HomeView : view);
  
  const blockIfNotAuthenticated = (view) => (!authenticatedUser ? SignInView : view);


  useEffect(()=>{
    isUserAuthenticated()
  })

  return (
    <BrowserRouter>
      {props.children}
      <Switch>
        <Route path={RoutingPath.showsView} component={blockIfNotAuthenticated(ShowsView)} />
        <Route path={RoutingPath.searchView} component={blockIfNotAuthenticated(SearchView)} />
        <Route path={RoutingPath.infoView} component={InfoView} />
        <Route path={RoutingPath.signInView} component={blockIfAuthenticated(SignInView)} />
        <Route path={RoutingPath.homeView} component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
};
