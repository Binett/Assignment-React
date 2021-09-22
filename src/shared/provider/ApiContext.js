import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://api.tvmaze.com/shows?page=1`);
      console.log(data);
      setData(data)
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ApiContext.Provider>
  );
};
