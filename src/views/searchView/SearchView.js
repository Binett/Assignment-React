import React, { useContext } from "react";
import { ApiContext } from "../../shared/provider/ApiContext";
import { ResultCard } from "../../components/showcard/ResultCard";
import loader from '../../shared/images/loader.gif'
import classes from './SearchView.module.css'

export const SearchView = () => {
  const { searchData, setSearch , isLoading, error } = useContext(ApiContext);


  const onChange = (event) => {
    setTimeout(() => {
      event.preventDefault();
      if(event.target.value.length >=1){
        setSearch(event.target.value);
      }else{
        setSearch()
      }      
    }, 1500);
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
      ? (
        <div className={classes.post}>
            {searchData.map((shows, i) => (
              <div key={i}>
                <ResultCard shows={shows.show} />
              </div>
            ))}
          </div>
      
      ) 
      : (<h2>No shows found</h2>)}
    </div>
  );
};
