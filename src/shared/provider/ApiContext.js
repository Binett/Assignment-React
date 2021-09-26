import { createContext, useState, useEffect } from "react";
import TvMazeAPIService from '../api/tvmazeapiservice/TvMazeAPIService'

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchData, setsearchData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await TvMazeAPIService.searhShow(search);
        console.log(data);
        setsearchData(data)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false)
        setError(true);
      }
    };
    fetchSearchData();
  }, [search,setSearch]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await TvMazeAPIService.getFirstData();
        console.log(data);
        setData(data)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false)
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, isLoading, error, searchData,setSearch,search}}>
      {children}
    </ApiContext.Provider>
  );
};
