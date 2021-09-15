import { BrowserRouter, Switch, Route } from "react-router-dom";
import {FavouritesView} from '../views/favouritesview/FavouritesView'
import {HomeView} from '../views/homeview/HomeView'
import RoutingPath from "./RoutingPath";

export const Routes = (props) => {
  return (
    <BrowserRouter>
    {props.children}
      <Switch>
          <Route path={RoutingPath.favouriteView} component={FavouritesView} />
          <Route path={RoutingPath.homeView} component={HomeView}/>
      </Switch>
    </BrowserRouter>
  );
};
