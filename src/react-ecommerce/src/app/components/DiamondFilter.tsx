"use client";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import Nouislider from "nouislider-react";

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

  const filters = [
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
  ];

  const [symmetry, setSymmetry] = useState([0, 1]);

  return (
    <div className="container max-w-[1460px] mx-auto grid grid-cols-3 gap-7 rounded-lg">
      {/* Diamond Shape Selection (Scrollable with Buttons) */}
      <div className="col-span">
        <h2 className="text-lg font-semibold mb-2">Diamond Shape</h2>
        <div className="relative flex items-center">
          {/* Left Scroll Button */}
          <button
            className="absolute left-0 z-10 p-2 rounded-full hover:bg-gray-300"
            onClick={scrollLeft}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar  flex gap-4 w-full px-10"
          >
            {["Round", "Oval", "Cushion", "Pear", "Princess", "Emerald"].map(
              (shape) => (
                <div
                  key={shape}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div className="w-14 h-14 border rounded-full flex items-center justify-center">
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
            className="absolute right-0 z-10 p-2  rounded-full hover:bg-gray-300"
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
              className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 ${
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
        {filters.map(({ title, values, min, max, step }) => (
          <div key={title}>
            <h3 className="text-sm font-semibold mb-1">{title}</h3>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              className="w-full accent-pink-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              {values.map((value, index) => (
                <span key={value} className="w-1/6 text-center">
                  {value}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Symmetry Slider */}
        <div>
          <h3 className="text-sm font-semibold mb-1">Symmetry</h3>
          <Nouislider
            range={{ min: 0, max: 3 }}
            start={symmetry}
            step={1}
            connect={true}
            onChange={(values) => setSymmetry(values.map(Number))}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            {[
              "Good",
              "Very Good",
              "Excellent",
              "None",
            ].map((value, index) => (
              <span key={value} className="w-1/4 text-center">
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DiamondFilter;