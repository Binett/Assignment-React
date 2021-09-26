import React, { useContext } from "react";
import { ApiContext } from "../../shared/provider/ApiContext";
import { ResultCard } from "../../components/showcard/ResultCard";
import loader from '../../shared/images/loader.gif'

export const SearchView = () => {
  const { searchData, setSearch , isLoading, error } = useContext(ApiContext);

  const onChange = (event) => {
    event.preventDefault();
    if(event.target.value.length >=1){
      setSearch(event.target.value);
    }else{
      setSearch()
    }
  };

  return (
    <div>
       {isLoading 
       ? (<img src={loader} alt="Loading bar" />) 
       : (error && <p>Something went wrong, please try again!</p>)}
      <h1>Search Show</h1>
      <input
        placeholder="Search"
        type="text"
        onChange={onChange}
      />
      {(searchData.length > 0) 
      ? (<ul>
          {searchData.map((shows, i) => (
            <li key={i}>
              <ResultCard shows={shows.show} />
            </li>
          ))}
        </ul>
      ) 
      : (<h2>No shows found</h2>)}
    </div>
  );
};
