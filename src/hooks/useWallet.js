import React, { useContext, useState, useCallback, useEffect } from 'react';
import { AsyncStorage } from 'AsyncStorage';
import { light, dark } from '../constants';

export const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
   const [isDark, setIsDark] = useState(false);
   const [theme, setTheme] = useState(true);

   useEffect(() => {
      setTheme(isDark ? light : dark);
   }, [isDark]);

   //Export
   const contextValue = {
      isDark,
      theme,
   };

   return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

/** Wallet Connector */
export const useWallet = () => useContext(DataContext);
