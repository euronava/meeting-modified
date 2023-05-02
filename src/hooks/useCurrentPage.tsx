import React from "react";
import { MenuId } from "../components/Tab";

const TabContext = React.createContext({});

export const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = React.useState<MenuId>(MenuId.Dashboard);

  const contextProvider = (children: React.ReactNode) => {
    return <TabContext.Provider value={{ currentPage, setCurrentPage }}>{children}</TabContext.Provider>;
  }
  return [{
    currentPage,
    setCurrentPage
  }, contextProvider]
}