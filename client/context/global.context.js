"use client";
import { useState, useEffect, useContext, createContext } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
   const [pageLoading, setPageLoading] = useState(true);
   return (
      <GlobalContext.Provider value={{pageLoading, setPageLoading}}>
         {children}
      </GlobalContext.Provider>
   );
}

export const useGlobalValues = () => useContext(GlobalContext);
