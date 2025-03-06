/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { weatherContext } from "../context/DataContext";

import { dotPulse } from "ldrs";

dotPulse.register();

const TodaysStatment = () => {
  const app = useContext(weatherContext);

  if (!app) {
    return (
      <div className="px-7 py-3 rounded-[2rem] w-full h-[12rem] glassMorf1 flex items-center justify-center">
        <l-dot-pulse size="43" speed="1.3" color="white"></l-dot-pulse>;
      </div>
    );
  }

  // Extracting data from the API response
  const { main } = app;
  const temperature = main ? Math.round(main.temp - 273.15) : null;
  const maxTemp = main ? Math.round(main.temp_max - 273.15) : null;
  const minTemp = main ? Math.round(main.temp_min - 273.15) : null;
  const pressure = main?.pressure || "N/A";
  const humidity = main?.humidity || "N/A";

  return (
    <div className="px-7 py-3 rounded-[2rem] w-full h-[12rem] glassMorf1 flex-col items-center justify-center">
      <div className="h-10 text-center">
        <p className="font-thin text-white tracking-widest opacity-75">
          Today&apos;s Statement
        </p>
      </div>
      <div>
        <ul className="flex items-center justify-around gap-5">
          <li className="flex flex-col w-32 h-32 text-center items-center justify-center">
            <p className="text-6xl font-thin Raleway text-white">
              {temperature}&deg;
            </p>
            <p className="Raleway text-white font-thin mt-3">Temperature</p>
          </li>
          <li className="flex flex-col w-32 h-32 text-center items-center justify-center">
            <p className="text-6xl font-thin Raleway text-white">
              {maxTemp}&deg;
            </p>
            <p className="Raleway text-white font-thin mt-3">Max-Temp</p>
          </li>
          <li className="flex flex-col w-32 h-32 text-center items-center justify-center">
            <p className="text-6xl font-thin Raleway text-white">
              {minTemp}&deg;
            </p>
            <p className="Raleway text-white font-thin mt-3">Min-Temp</p>
          </li>
          <li className="flex flex-col w-32 h-32 text-center items-center justify-center">
            <p className="text-6xl font-thin Raleway text-white">
              {pressure}
              <span className="text-sm">hPa</span>
            </p>
            <p className="Raleway text-white font-thin mt-3">Pressure</p>
          </li>
          <li className="flex flex-col w-32 h-32 text-center items-center justify-center">
            <p className="text-6xl font-thin Raleway text-white">
              {humidity}
              <span className="text-sm">%</span>
            </p>
            <p className="Raleway text-white font-thin mt-3">Humidity</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodaysStatment;
