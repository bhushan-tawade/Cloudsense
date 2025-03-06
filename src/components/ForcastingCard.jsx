/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { weatherContext } from "../context/DataContext";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const ClothingSuggestions = () => {
  const weatherData = useContext(weatherContext);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const temperature = weatherData.main
    ? Math.round(weatherData.main.temp - 273.15)
    : "N/A"; // Convert from Kelvin to Celsius
  const suggestion = getClothingSuggestion(
    temperature,
    weatherData.weather[0].description
  );
  const [text] = useTypewriter({
    words: [suggestion],
    loop: 1, // Stops typing after completing
    delaySpeed: 1000,
  });

  return (
    <div className="clothing-suggestions  rounded-lg">
      <h2 className="text-2xl font-medium montserrat tracking-wider text-white">
        Clothing Suggestions
      </h2>
      <div className="p-4 bg-zinc-400 rounded-2xl glassMorf2 mt-6 h-[14rem] overflow-y-auto">
        <p className="font-thin tracking-wide text-lg leading-relaxed text-white break-words">
          {text}
          <Cursor cursorStyle="_" />
        </p>
      </div>
    </div>
  );
};

function getClothingSuggestion(temperature, weatherCondition) {
  if (temperature <= 0) {
    return "It's freezing outside! Bundle up with a heavy coat, insulated gloves, a warm scarf, a hat, and layers underneath. Consider thermal wear if you plan to be outside for long.";
  } else if (temperature <= 10) {
    return "It's quite cold. Wear a thick jacket, a cozy scarf, and gloves. A beanie or hat would help keep you warm. Layers are a good idea to stay comfortable indoors and out.";
  } else if (temperature <= 20) {
    if (weatherCondition.includes("rain")) {
      return "It's a bit chilly and rainy. A waterproof jacket or raincoat with a hood and a sweater underneath would be ideal. Don’t forget an umbrella!";
    } else {
      return "A sweater or light jacket will keep you comfortable in this mild weather. Consider wearing long pants, and a scarf if you tend to get cold.";
    }
  } else if (temperature <= 30) {
    if (weatherCondition.includes("rain")) {
      return "It's warm, but rainy. Wear light, breathable clothing with a waterproof jacket, and carry an umbrella. Quick-dry fabrics are a good choice.";
    } else if (weatherCondition.includes("cloud")) {
      return "It’s a comfortable temperature. A t-shirt with jeans or light pants would be perfect. Bring a light jacket if it might get cooler later.";
    } else {
      return "It’s warm outside! Wear something light and breathable, like a t-shirt, shorts, or a sundress. A hat and sunglasses are good ideas if it’s sunny.";
    }
  } else {
    if (weatherCondition.includes("rain")) {
      return "It’s hot and rainy. Wear lightweight, breathable clothing, such as a tank top and shorts, and bring an umbrella. Stay hydrated!";
    } else {
      return "It's really hot! Dress in the lightest clothing possible, like shorts, tank tops, or a breathable dress. Remember sunglasses, a hat, and sunscreen to protect yourself from the sun.";
    }
  }
}

export default ClothingSuggestions;
