/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import CurrtWeather from "./components/CurrtWeather";
import TodaysStatment from "./components/TodaysStatment";
import FutureForcast from "./components/FutureForcast";
import ActivityBar from "./components/ActivityBar";
import Search from "./components/Search";
import { weatherContext } from "./context/DataContext";
import Menu from "./components/Menu";
import SplashScreen from "./components/SplashScreen"; // Import SplashScreen
const Content = ({
  searchBarActive,
  setSearchBarActive,
  searchQuery,
  setSearchQuery,
  menu,
  setMenu,
  slideup,
  isSplashVisible,
  handleAnimationEnd,
  scrollRef,
}) => {
  const data = useContext(weatherContext);
  console.log(data); // Uncomment to check the weather data displayed in the console.log. This data is fetched from the OpenWeatherMap API.
  return (
    <div className="App">
      {isSplashVisible ? (
        <SplashScreen onAnimationEnd={handleAnimationEnd} />
      ) : (
        <main>
          <div className="w-full h-screen  bg-[url('../bg.jpeg')] bg-no-repeat bg-cover p-10 flex justify-end items-center">
            <div
              ref={scrollRef}
              className="w-[98%] h-[45.5rem]  bg-white rounded-[3rem] glassMorf pl-8 overflow-hidden"
            >
              <div className="flex justify-around w-full h-full">
                <div className="left p-5 flex-row w-[70%] h-full">
                  <CurrtWeather />
                  <TodaysStatment />
                  {searchBarActive && (
                    <Search
                      searchBarActive={searchBarActive}
                      setSearchBarActive={setSearchBarActive}
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                    />
                  )}
                </div>
                <FutureForcast />
              </div>
              <Menu menu={menu} setMenu={setMenu} slideup={slideup} />
            </div>
            <ActivityBar
              searchBarActive={searchBarActive}
              setSearchBarActive={setSearchBarActive}
              menu={menu}
              setMenu={setMenu}
              slideup={slideup}
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default Content;
