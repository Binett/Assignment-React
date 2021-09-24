import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pageNumber, setpageNumber] = useState(0)
 
  if(pageNumber>5) setpageNumber(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`https://api.tvmaze.com/shows?page=${pageNumber}`);
        console.log(data);
        setData(data)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false)
        setError(true);
      }
    };
    fetchData();
  }, [pageNumber,setpageNumber]);

  return (
    <ApiContext.Provider value={{ data, isLoading, error, pageNumber, setpageNumber}}>
      {children}
    </ApiContext.Provider>
  );
};
