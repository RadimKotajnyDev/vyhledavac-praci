// Create a context
import React, {createContext, ReactNode, useContext, useState} from 'react';

// Define types for your API data
type APIData = {
  // Define your API data structure here
  skolni_rok?: string,
  tema?: string,
  obor?: string,
  predmet?: string,
  jmeno_prijmeni?: string,
  vedouci?: string,
  Message?: string;
};

type APIDataContextType = {
  apiData: APIData;
  setAPIData: React.Dispatch<React.SetStateAction<APIData>>;
};

const initialAPIData: APIData = {}

const APIDataContext = createContext<APIDataContextType>({
  apiData: initialAPIData,
  setAPIData: () => {
  },
});

// Create a provider to wrap your components
export const APIDataProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [apiData, setAPIData] = useState<APIData>(initialAPIData);

  return (
    <APIDataContext.Provider value={{apiData, setAPIData}}>
      {children}
    </APIDataContext.Provider>
  );
};

// Custom hook to access the API data
export const useAPIData = () => useContext(APIDataContext);
