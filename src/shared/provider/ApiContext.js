import { createContext, useState, useEffect } from "react";
import TvMazeAPIService from '../api/tvmazeapiservice/TvMazeAPIService'

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState()
  const [error, setError] = useState(false);
  const [searchData, setsearchData] = useState([])
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchSearchData = async () => {

      try {
        setIsLoading(true);
        const {data} = await TvMazeAPIService.searhShow(search)
        setsearchData(data)
        console.log(data);      
        setIsLoading(false)

      } catch (error) {
        setIsLoading(false)
        setError(true);
      }
    };
    fetchSearchData();
  }, [search]);




  useEffect(() => {
    const fetchData = async () => {

      try {
        setIsLoading(true);
        const { data } = await TvMazeAPIService.getFirstData();
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
    <ApiContext.Provider value={{ data, isLoading, error, searchData,setSearch}}>
      {children}
    </ApiContext.Provider>
  );
};
