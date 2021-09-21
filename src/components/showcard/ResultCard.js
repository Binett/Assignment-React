import { useContext, useState } from "react";
import { ApiContext } from "../../shared/provider/ApiContext";
import { Pagination } from "../pagination/Pagination";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import "./ResultCard.css";

export const ResultCard = () => {
  const history = useHistory();
  const { data } = useContext(ApiContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="result-card">
        {currentPost.length > 0}
        {currentPost.map((shows) => (
          <div key={shows.name} className="post">
            <h3>{shows.name}</h3>
            <img src={shows.image?.medium} alt="Movie Poster" />
            <h4>{shows.premiered ? shows.premiered.substring(0, 4) : "-"}</h4>
            <button onClick={() => history.push(RoutingPath.infoView, shows)}>
              Show More info
            </button>
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
