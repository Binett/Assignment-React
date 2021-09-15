import { BrowserRouter, Switch, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path={RoutingPath.homeView }/>
          <Route path={RoutingPath.favouriteView} />
      </Switch>
    </BrowserRouter>
  );
};
