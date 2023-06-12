import React, { useContext, useEffect, useRef, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(null);
  const navbarRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(null);
  const scrollTopButtonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const getScrollHeight = () => {
    setScrollHeight(window.scrollY);
  };

  const scrollTop = () => {
    window.scrollTo(0, `${navbarHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollHeight);
    return () => {
      window.removeEventListener("scroll", getScrollHeight);
    };
  }, [scrollHeight]);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        navbarHeight,
        setNavbarHeight,
        navbarRef,
        scrollHeight,
        scrollTopButtonRef,
        toggleSidebar,
        closeSidebar,
        getScrollHeight,
        scrollTop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
