import RoutingPath from "../../routes/RoutingPath";
import { useHistory } from "react-router";
import classes from "./ResultCard.module.css";

export const ResultCard = ({ shows,currentPage }) => {
  const history = useHistory();
  return (
    <div>
  
        <div key={shows.id} className={classes.post}>
          <h3>{shows.name}</h3>
          <img src={shows.image?.medium} alt="Movie Poster" />
          <h4>{shows.premiered ? shows.premiered.substring(0, 4) : "-"}</h4>
          <button
            onClick={() =>
              history.push(RoutingPath.infoView, {
                shows: shows,
                currentPage: currentPage,
              })
            }
          >
            Show More info
          </button>
        </div>
      </div>
    
  );
};
