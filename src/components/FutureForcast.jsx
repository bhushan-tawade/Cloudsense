/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FiWind } from "react-icons/fi";
import ForcastingCard from "./ForcastingCard";
import { weatherContext } from "../context/DataContext";

import { dotPulse } from "ldrs";

dotPulse.register();

const FutureForcast = () => {
  const weatherData = useContext(weatherContext);

  if (!weatherData) {
    return (
      <div className="right rounded-tr-[3rem] rounded-br-[3rem] w-[30%] glassMorf1 p-8 text-white z-0 flex items-center justify-center">
        <l-dot-pulse size="43" speed="1.3" color="white"></l-dot-pulse>
      </div>
    );
  }

  const { main, wind } = weatherData;
  const temperature = main ? Math.round(main.temp - 273.15) : "N/A";
  const windSpeed = wind ? Math.round(wind.speed * 3.6) : "N/A"; // Convert m/s to km/h
  const windDirection = wind ? getWindDirection(wind.deg) : "";

  // Get local date and time
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="right rounded-tr-[3rem] rounded-br-[3rem] w-[30%] glassMorf1 p-8 text-white z-0">
      <div className="flex justify-between text-lg montserrat tracking-wider w-[22.2rem]">
        <h1 className="font-normal">{formattedDate}</h1>
        <p className="font-thin">{formattedTime}</p>
      </div>
      <div className="flex flex-col items-center justify-center h-64 mt-6 relative">
        <h1 className="text-8xl">
          {temperature}
          <span className="font-thin">&deg;</span>
        </h1>
      </div>
      <div className="absolute top-60">
        <p className="flex items-center justify-center gap-2 montserrat mt-5 font-thin tracking-wider w-[22.2rem] text-lg">
          <FiWind />
          {windDirection}, {windSpeed} km/h
        </p>
      </div>

      <hr className="opacity-75 border-t-none border-zinc-300" />

      <div className="mt-5">
        <div className="mt-8 flex-col h-[20rem]">
          <ForcastingCard />
        </div>
      </div>
    </div>
  );
};

// Helper function to convert wind degrees to direction
function getWindDirection(degree) {
  const directions = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];
  const index = Math.round(degree / 45) % 8;
  return directions[index];
}

export default FutureForcast;
