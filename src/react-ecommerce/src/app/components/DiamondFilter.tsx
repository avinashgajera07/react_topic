"use client";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const DiamondFilter: React.FC = () => {
  const [isLabDiamond, setIsLabDiamond] = useState(false);
  const toggleDiamondType = () => setIsLabDiamond(!isLabDiamond);

  // Ref for scroll container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 border rounded-lg shadow-md bg-white grid grid-cols-3 gap-4">
      {/* Diamond Shape Selection (Scrollable with Buttons) */}
      <div className="col-span">
        <h2 className="text-lg font-semibold mb-2">Diamond Shape</h2>
        <div className="relative flex items-center">
          {/* Left Scroll Button */}
          <button
            className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
            onClick={scrollLeft}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar flex gap-4 w-full px-10"
          >
            {["Round", "Oval", "Cushion", "Pear", "Princess", "Emerald"].map(
              (shape) => (
                <div
                  key={shape}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div className="w-14 h-14 border rounded-full flex items-center justify-center shadow-sm">
                    <img
                      src={`/images/${shape.toLowerCase()}.png`}
                      alt={shape}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-sm mt-1">{shape}</span>
                </div>
              )
            )}
          </div>

          {/* Right Scroll Button */}
          <button
            className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
            onClick={scrollRight}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Diamond Type Toggle */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-pink-500 font-semibold">NATURAL DIAMONDS</span>
          <label className="relative inline-block w-10 h-5">
            <input
              type="checkbox"
              className="hidden"
              onChange={toggleDiamondType}
            />
            <span
              className={`absolute inset-0 bg-gray-300 rounded-full transition-transform duration-300 ${
                isLabDiamond ? "bg-pink-500" : ""
              }`}
            ></span>
            <span
              className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isLabDiamond ? "translate-x-5" : ""
              }`}
            ></span>
          </label>
          <span className="font-semibold">LAB DIAMONDS</span>
        </div>
      </div>

      {/* Sliders */}
      <div className="col-span-2 mt-6">
        <div className="grid grid-cols-2 gap-4 mt-6">
          {[
            {
              title: "Color",
              values: ["J", "I", "H", "G", "F", "E", "D"],
              min: 0,
              max: 6,
              step: 1,
            },
            {
              title: "Clarity",
              values: ["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"],
              min: 0,
              max: 7,
              step: 1,
            },
            {
              title: "Cut",
              values: ["Fair", "Good", "Very Good", "Ideal", "Super Ideal"],
              min: 0,
              max: 4,
              step: 1,
            },
            {
              title: "Carat",
              values: ["0.25", "1.25", "2.25", "3.25", "3.90", "4.56", "5.89", "13.42"],
              min: 0,
              max: 7,
              step: 1,
            },
          ].map(({ title, values, min, max, step }) => {
            const [sliderValue, setSliderValue] = useState(min); // State for slider value

            const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
              const value = parseInt(event.target.value, 10); // Get slider value
              setSliderValue(value); // Update state
            };

            // Calculate the position of each value
            const valuePositions = values.map((_, index) => (index / (values.length - 1)) * 100);

            return (
              <div key={title}>
                <h3 className="text-sm font-semibold mb-1">
                  {title} <span className="text-gray-400">(i)</span>
                </h3>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className="w-full accent-pink-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1 relative">
                  {values.map((value, index) => (
                    <span
                      key={value}
                      className="absolute"
                      style={{ left: `${valuePositions[index]}%`, transform: "translateX(-50%)" }}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiamondFilter;