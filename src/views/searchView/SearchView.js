import React, { useContext } from "react";
import { ApiContext } from "../../shared/provider/ApiContext";
import { ResultCard } from "../../components/showcard/ResultCard";

export const SearchView = () => {
  const { searchData, setSearch, search } = useContext(ApiContext);
  const onChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Search Show</h1>
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={onChange}
      />
      {searchData.length > 0 && (
        <ul>
          {searchData.map((shows, i) => (
            <li key={i}>
              <ResultCard shows={shows.show} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
