import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authContextValue = {
    isLoggedIn,
    signIn: () => setIsLoggedIn(true),
    signOut: () => setIsLoggedIn(false),
  };

  return (
    <AppContext.Provider value={authContextValue}>
      {children}
    </AppContext.Provider>
  );
};