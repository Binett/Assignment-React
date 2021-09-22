import { useContext } from "react";
import { ApiContext } from "../../shared/provider/ApiContext";
import loader from '../../shared/images/loader.gif'


export const HomeView = () => {
    const {data, isLoading, error } = useContext(ApiContext);

  const displayData = () => {
     return data?.map((shows)=>(
          <div key={shows.id}>
              <h3>{shows.name}</h3>
              <img src={shows.image?.medium} alt="Movie Poster"/>
              <h4>{shows.premiered ? shows.premiered.substring(0,4) : '-'}</h4>           
          </div>
      ))
  };

  return (
    <div>
      <h1>Home view</h1>
      {isLoading ? <img src={loader} alt="Loading bar"/> : error && <p>Something went wrong, please try again!</p>}
      {displayData()}
    </div>
  );
};
