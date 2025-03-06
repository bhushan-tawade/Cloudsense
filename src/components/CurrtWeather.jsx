/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";

import { weatherContext } from "../context/DataContext";
import { TbCloudFilled } from "react-icons/tb"; // simple Cloud icon
import { BsCloudSunFill } from "react-icons/bs"; // cloud with sun icon
import { BsFillCloudDrizzleFill } from "react-icons/bs"; //cloud with rain icon
import { BsCloudLightningRainFill } from "react-icons/bs"; // cloud with lightning and rain icon
import { BsFillCloudSnowFill } from "react-icons/bs"; // cloud with snow icon
import { ImSun } from "react-icons/im"; //sun icon

import { dotPulse } from "ldrs";

dotPulse.register();

const CurrtWeather = () => {
  const app = useContext(weatherContext);

  if (!app) {
    return (
      <div className=" flex items-center justify-center rounded-[2rem] w-full h-[31rem] glassMorf1 mb-5 p-10 relative">
        <l-dot-pulse size="43" speed="1.3" color="white"></l-dot-pulse>;
      </div>
    );
  }

  const { name: city, sys, weather, main } = app;
  const country = sys?.country || "";

  const weatherDescription =
    weather && weather[0] ? weather[0].description : "Weather data unavailable";

  const temperature = main?.temp ? Math.round(main.temp - 273.15) : null; // Convert Kelvin to Celsius

  const icon = () => {
    if (weatherDescription.includes("clear")) {
      return <ImSun className="w-40 h-40 text-white drop-shadow-xl" />;
    } else if (weatherDescription.includes("rain")) {
      return (
        <BsFillCloudDrizzleFill className="w-40 h-40 text-white drop-shadow-xl" />
      );
    } else if (weatherDescription.includes("snow")) {
      return (
        <BsFillCloudSnowFill className="w-40 h-40 text-white drop-shadow-xl" />
      );
    } else if (weatherDescription.includes("clouds")) {
      return <BsCloudSunFill className="w-40 h-40 text-white drop-shadow-xl" />;
    } else if (weatherDescription.includes("thunderstorm")) {
      return (
        <BsCloudLightningRainFill className="w-40 h-40 text-white drop-shadow-xl" />
      );
    } else {
      return <TbCloudFilled className="w-40 h-40 text-white drop-shadow-xl" />;
    }
  };

  const bgimage = () => {
    if (weatherDescription.includes("clear")) {
      return "clear-weather.jpeg";
    } else if (weatherDescription.includes("rain")) {
      return "rain-weather.jpeg";
    } else if (weatherDescription.includes("snow")) {
      return "snow-weather.jpeg";
    } else if (weatherDescription.includes("clouds")) {
      return "cloudy.jpeg";
    } else if (weatherDescription.includes("thunderstorm")) {
      return "thunderstorm-weather.jpeg";
    } else {
      return "default-weather.jpeg";
    }
  };

  const bg_image = bgimage();
  console.log(bg_image);

  return (
    <div
      className={`rounded-[2rem] w-full h-[29rem] bg-[url('../${bg_image}')] bg-no-repeat bg-cover mb-5 p-10 relative`}
    >
      <div className="flex items-center gap-3 text-white">
        <span>
          <FaLocationDot />
        </span>
        <p className="text-xl tracking-wider raleway">
          {city}, {country}
        </p>
      </div>

      <div className="absolute mb-10 bottom-0 text-white flex justify-between items-center w-[54rem]">
        <div>
          <p className="my-5 font-thin tracking-wide text-[1.5rem]">
            Weather Forecast
          </p>
          <h1 className="raleway text-[4rem] font-medium">
            {weatherDescription}
          </h1>
          {temperature !== null && (
            <p className="font-normal text-[1rem]">
              Temperature: {temperature}°C
            </p>
          )}
        </div>
        <div>{icon()}</div>
      </div>
    </div>
  );
};

export default CurrtWeather;
