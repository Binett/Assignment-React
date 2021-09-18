import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchFirstData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://api.tvmaze.com/shows`);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchFirstData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ApiContext.Provider>
  );
};
