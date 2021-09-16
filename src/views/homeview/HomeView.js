import TvMazeAIPService from "../../shared/api/tvmazeapiservice/TvMazeAIPService";
import { useState, useEffect } from "react";

export const HomeView = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

  const fetchData = async () => {
    const {data} = await TvMazeAIPService.searhShow(search);
    setData(data);
  };

  const displayData = () => {
    return data?.map((shows)=>(
        <div key={shows.show.id}>
            <h3>{shows.show.name}</h3>
            <img src={shows.show.image?.medium}/>
            <h4>{shows.show.premiered ? shows.show.premiered.substring(0,4) : '-'}</h4>
        </div>
    ))
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div>
      <h1>Home view</h1>
      <input
        placeholder="Search"
        type="text" 
        onChange={(event)=>setSearch(event.target.value)}       
      />
      {displayData()}
    </div>
  );
};
