import React from "react";
import { useLocation, useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import classes from "./InfoView.module.css";

export const InfoView = () => {
  const location = useLocation();
  const history = useHistory();
  
  console.log(location.state);
  const displayStateData = () => {
    return location.state ? (
      <div className={classes.card}>
        <div className={classes.img__poster}>
          <img src={location.state.shows.image?.original} alt="Movie Poster" />
        </div>
        <div className={classes.infosection}>
          <h1>Title: {location.state.shows.name}</h1>
          <h4>
            Released:{" "}
            {location.state.shows.premiered
              ? location.state.shows.premiered.substring(0, 4)
              : "-"}
          </h4>
          <h4>Rating: {location.state.shows.rating.average}</h4>
          <h4>Type: {location.state.shows.type}</h4>
          <h4>Status: {location.state.shows.status}</h4>
          <h2>{location.state.shows.summary.replace(/<[^&>]*>/g, " ")}</h2>
          <button onClick={() => history.push(RoutingPath.showsView, location.state.currentPage)}>Go Back</button>
        </div>
      </div>
    ) : (
      <div>{history.push(RoutingPath.homeView)}</div>
    );
  };

  return <>{displayStateData()}</>;
};
