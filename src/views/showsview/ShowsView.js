import { useContext, useState } from "react";
import { ApiContext } from "../../shared/provider/ApiContext";
import { useLocation } from "react-router-dom";
import { ResultCard } from "../../components/showcard/ResultCard";
import { Pagination } from "../../components/pagination/Pagination";
import loader from "../../shared/images/loader.gif";
import classes from "./ShowsView.module.css";

export const ShowsView = () => {
  const location = useLocation();
  const { data, isLoading, error } = useContext(ApiContext);
  const [currentPage, setCurrentPage] = useState(
    location.state > 1 ? location.state : 1
  );
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {isLoading ? (
        <img src={loader} alt="Loading bar" />
      ) : (
        error && <p>Something went wrong, please try again!</p>
      )}
      <h1>Shows Page</h1>
      {location.state && <h4>{location.state.user}</h4>}
      <div className={classes.post}>
        {currentPost.length > 0}
        {currentPost.map((shows) => (
          <div key={shows.id}>
            <ResultCard shows={shows} currentPage={currentPage} />
          </div>
        ))}
      </div>
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
