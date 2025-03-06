// SplashScreen.js
import React, { useEffect, useState } from "react";

const SplashScreen = ({ onAnimationEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Set a timeout to start the fade-out effect
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // Duration before fade-out starts (2 seconds here)

    // Call onAnimationEnd after animation is complete
    const endTimer = setTimeout(() => {
      onAnimationEnd();
    }, 3000); // Total duration (3 seconds here)

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 text-white text-2xl transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1 className="space-grotesk text-9xl">CloudSense</h1>
    </div>
  );
};

export default SplashScreen;
