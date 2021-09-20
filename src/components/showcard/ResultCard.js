import { useContext } from "react";
import { ApiContext } from "../../shared/provider/ApiContext";

export const ResultCard = () => {
  const { data } = useContext(ApiContext);

  return (
    <div className="result card">
      {data.length > 0}(
      {data.map((shows) => (
        <div key={shows.id}>
          <h3>{shows.name}</h3>
          <img src={shows.image?.medium} alt="Movie Poster" />
          <h4>{shows.premiered ? shows.premiered.substring(0, 4) : "-"}</h4>
        </div>
      ))}      
    </div>
  );
};
