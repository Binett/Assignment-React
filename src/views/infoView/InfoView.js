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
          <img src={location.state.image?.original} alt="Movie Poster" />
        </div>
        <div className={classes.infosection}>
          <h1>Title: {location.state.name}</h1>
          <h4>
            Released:{" "}
            {location.state.premiered
              ? location.state.premiered.substring(0, 4)
              : "-"}
          </h4>
          <h4>Rating: {location.state.rating.average}</h4>
          <h4>Type: {location.state.type}</h4>
          <h4>Status: {location.state.status}</h4>
          <h2>{location.state.summary.replace(/<[^&>]*>/g, " ")}</h2>
          <button onClick={() => history.goBack()}>Go Back</button>
        </div>
      </div>
    ) : (
      <div>{history.push(RoutingPath.homeView)}</div>
    );
  };

  return <>{displayStateData()}</>;
};
