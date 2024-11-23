"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

const AnimatedSearchIcon = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const range = 30; // Pixels for movement range

  useEffect(() => {
    const moveIcon = () => {
      setPosition((prevPos) => ({
        x: Math.max(
          -range,
          Math.min(range, prevPos.x + (Math.random() - 0.5) * 20)
        ),
        y: Math.max(
          -range,
          Math.min(range, prevPos.y + (Math.random() - 0.5) * 20)
        ),
      }));
    };

    const intervalId = setInterval(moveIcon, 100); // Update 10 times per second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div
        className="absolute animate-pulse"
        style={{
          left: "50%",
          top: "50%",
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          transition: "transform 0.1s linear",
        }}
      >
        <Search size={68} color="#8B5CF6" />
      </div>
      <div className="mt-36 text-purple-600 text-lg font-semibold animate-pulse ">
        Searching jobs...
      </div>
    </div>
  );
};

const styles = `
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.animate-pulse {
  animation: pulse 0.8s infinite;
}
`;

const StyleTag = () => <style>{styles}</style>;

const SearchAnimation = () => (
  <>
    <StyleTag />
    <div className="relative w-screen h-screen bg-purple-50 flex items-center justify-center">
      <div className="w-80 h-80 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
        <AnimatedSearchIcon />
      </div>
    </div>
  </>
);

export default AnimatedSearchIcon;
export { SearchAnimation };
