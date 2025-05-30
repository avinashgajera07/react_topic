"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  const handleScroll = () => {};
  return (
    <div className="hero bg-mint-500">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Expore Cars"
          containerStyles="bg-primary text-white rounded-full py-3 mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" 
          fill className="object-contain"
          />

          <div className="hero__image-overlay">
            {/* <Image src='/hero-bg.png' alt="hero-bg" width={130} height={40} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
