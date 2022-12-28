import React, { useContext, useState, useCallback, useEffect } from 'react';
import { AsyncStorage } from 'AsyncStorage';
import { light, dark } from '../constants';

export const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
   const [isDark, setIsDark] = useState(false);
   const [theme, setTheme] = useState(true);
   const [isSigned, setIsSigned] = useState(false);

   /** Authentication */
   const getUserToken = async () => {
      try {
         const value = await AsyncStorage.getItem('userToken');
         if (value !== null) {
            console.log(JSON.parse(value));
            if (value !== null) {
               setIsSigned(true);
            }
         }
      } catch (e) {
         setIsSigned(false);
      }
   };

   const deleteUserToken = useCallback(async () => {
      try {
         await AsyncStorage.removeItem('userToken');
         setIsSigned(false);
      } catch (e) {
         setIsSigned(true);
      }
   }, []);

   const handleSignIn = async ({ authentication }) => {
      console.log(authentication);
      if (!isSigned) {
         //TODO: Server side authentication checking

         try {
            await AsyncStorage.setItem('userToken', JSON.stringify(authentication));
            setIsSigned(true);
         } catch (error) {
            setIsSigned(false);
         }
      }
   };

   const handleSignOut = async () => {
      if (isSigned) {
         await deleteUserToken();
      }
   };

   /** Theme */
   const getIsDark = useCallback(async () => {
      const isDarkJSON = await AsyncStorage.getItem('isDark');
      if (!isDarkJSON && isDarkJSON !== null) {
         setIsDark(JSON.parse(isDarkJSON));
      }
   }, [setIsDark]);

   const handleIsDark = useCallback(
      (payload) => {
         setIsDark(payload);
         AsyncStorage.setItem('isDark', JSON.stringify(payload));
      },
      [setIsDark]
   );

   useEffect(() => {
      getIsDark();
   }, [getIsDark]);

   useEffect(() => {
      setTheme(isDark ? light : dark);
   }, [isDark]);

   useEffect(() => {
      getUserToken();
   }, [isSigned]);

   //Export
   const contextValue = {
      isDark,
      handleIsDark,
      theme,
      isSigned,
      handleSignOut,
      handleSignIn,
   };

   return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
