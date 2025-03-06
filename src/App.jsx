/* eslint-disable no-unused-vars */
import React, { useState, useRef, useContext } from "react";

import DataContext, { weatherContext } from "./context/DataContext";

import Content from "./Content";

const App = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menu, setMenu] = useState(true);
  const scrollRef = useRef(null);
  const data = useContext(weatherContext);

  const slideup = (e) => {
    scrollRef.current.scrollBy({
      top: e,
      behavior: "smooth",
    });
  };

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleAnimationEnd = () => {
    setIsSplashVisible(false); // Hide splash screen after animation
  };

  return (
    <DataContext searchQuery={searchQuery}>
      <Content
        searchBarActive={searchBarActive}
        setSearchBarActive={setSearchBarActive}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        menu={menu}
        setMenu={setMenu}
        slideup={slideup}
        isSplashVisible={isSplashVisible}
        handleAnimationEnd={handleAnimationEnd}
        scrollRef={scrollRef}
      />
    </DataContext>
  );
};

export default App;
