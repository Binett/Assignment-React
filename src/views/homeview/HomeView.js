import { useState, useContext } from "react";
import { AppContext } from "../../shared/provider/AppProvider";

export const HomeView = () => {
    const [search, setSearch] = useState('');
    const {data, isLoading } = useContext(AppContext);

  const displayData = () => {
   return(isLoading) ? <p>Loading...</p> :
     data?.map((shows)=>(
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
      <input
        placeholder="Search"
        type="text" 
        onChange={(event)=>setSearch(event.target.value)}       
      />
      {!isLoading && displayData()}
    </div>
  );
};
