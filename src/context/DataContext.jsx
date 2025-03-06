import React, { createContext, useState, useEffect } from "react";

export const weatherContext = createContext();

const DataContext = ({ children, searchQuery }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          !searchQuery ? "germany" : searchQuery
        }&appid=71b48b1b5b956324891380e82df8c8ef`
      );
      const weatherData = await response.json();
      setData(weatherData);
    }

    fetchData();

    // Clean up the effect to prevent memory leaks
    return () => {
      setData(null);
    };
  }, [searchQuery]);

  return (
    <weatherContext.Provider value={data}>{children}</weatherContext.Provider>
  );
};

export default DataContext;
