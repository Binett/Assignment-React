import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FavouritesView } from "../views/favouritesview/FavouritesView";
import { HomeView } from "../views/homeview/HomeView";
import { SignInView } from "../views/signinview/SignInView";
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


  useEffect(()=>{
    isUserAuthenticated()
  })

  return (
    <BrowserRouter>
      {props.children}
      <Switch>
        <Route path={RoutingPath.favouriteView} component={FavouritesView} />
        <Route path={RoutingPath.infoView} component={InfoView} />
        <Route path={RoutingPath.signInView} component={blockIfAuthenticated(SignInView)} />
        <Route path={RoutingPath.homeView} component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
};
