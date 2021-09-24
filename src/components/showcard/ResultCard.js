import { useContext, useState } from "react";
import { ApiContext } from "../../shared/provider/ApiContext";
import { Pagination } from "../pagination/Pagination";
import { useHistory,useLocation } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import loader from '../../shared/images/loader.gif'
import classes from "./ResultCard.module.css";

export const ResultCard = (props) => {
  const history = useHistory();
  const location = useLocation()
  const { data,isLoading,error,pageNumber, setpageNumber } = useContext(ApiContext);
  const [currentPage, setCurrentPage] = useState((props.startPage>1) ? props.startPage : 1);
  const [postsPerPage] = useState(8);

  console.log(location.state);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
       {isLoading ? <img src={loader} alt="Loading bar"/> : error && <p>Something went wrong, please try again!</p>}
      <div className={classes.result__card}>
        {currentPost.length > 0}
        {currentPost.map((shows) => (
          <div key={shows.name} className={classes.post}>
            <h3>{shows.name}</h3>
            <img src={shows.image?.medium} alt="Movie Poster" />
            <h4>{shows.premiered ? shows.premiered.substring(0, 4) : "-"}</h4>
            <button onClick={() => history.push(RoutingPath.infoView, {shows: shows, currentPage: currentPage})}>
              Show More info
            </button>
          </div>
        ))}
      </div>
      <button onClick={()=>setpageNumber(pageNumber +1)} >Next</button>
      <div>
        <Pagination
          postPerPage={postsPerPage}
          totalPost={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};
