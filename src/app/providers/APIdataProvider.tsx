// Create a context
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for your API data
type APIData = {
  // Define your API data structure here
};

type APIDataContextType = {
  apiData: APIData;
  setAPIData: React.Dispatch<React.SetStateAction<APIData>>;
};

const initialAPIData: APIData = {
  // Define initial values for your API data here
};

const APIDataContext = createContext<APIDataContextType>({
  apiData: initialAPIData,
  setAPIData: () => {},
});

// Create a provider to wrap your components
export const APIDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [apiData, setAPIData] = useState<APIData>(initialAPIData);

  return (
    <APIDataContext.Provider value={{ apiData, setAPIData }}>
      {children}
    </APIDataContext.Provider>
  );
};

// Custom hook to access the API data
export const useAPIData = () => useContext(APIDataContext);
