"use client";
import React, { useState, useEffect } from "react";

const FilmStrip = ({ images }) => {
  const [translateY, setTranslateY] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  // Vertical scrolling effect for larger devices (md and up)
  useEffect(() => {
    const animationDuration = 10000;
    const stepSize = 1;
    const interval = animationDuration / (images.length * 100);

    const timer = setInterval(() => {
      setTranslateY((prev) => {
        const newValue = prev - stepSize;
        return newValue <= -(images.length * 200) ? 0 : newValue;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images]);

  // Horizontal scrolling effect for smaller devices (below md)
  useEffect(() => {
    const animationDuration = 10000;
    const stepSize = 1;
    const interval = animationDuration / (images.length * 100);

    const timer = setInterval(() => {
      setTranslateX((prev) => {
        const newValue = prev - stepSize;
        return newValue <= -(images.length * 120) ? 0 : newValue;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div>
      {/* FilmStrip for larger devices (md and up) */}
      <div className="hidden md:flex">
        <div className="h-screen w-max bg-black overflow-hidden flex justify-between items-start">
          <img
            src="/images/filmstrip-left.jpg"
            className="min-h-full"
            alt="Filmstrip left"
          />
          <div
            style={{
              transform: `translateY(${translateY}px)`,
              transition: "transform 0.1s linear",
            }}
            className="flex flex-col"
          >
            {[...images, ...images, ...images].map((src, index) => (
              <div
                key={index}
                className="my-2 border-2 border-black p-1 flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`Movie poster ${index + 1}`}
                  className="w-28 h-40 object-cover"
                />
              </div>
            ))}
          </div>
          <img
            src="/images/filmstrip-right.jpg"
            className="min-h-full"
            alt="Filmstrip right"
          />
        </div>
      </div>

      {/* FilmStrip for smaller devices (below md) */}
      <div className="block md:hidden">
        <div className="w-screen h-40 bg-black overflow-hidden flex items-center">
          <img
            src="/images/filmstrip-left.jpg"
            className="h-full rotate-90"
            alt="Filmstrip left"
          />
          <div
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.1s linear",
            }}
            className="flex flex-row flex-nowrap"
          >
            {[...images, ...images, ...images].map((src, index) => (
              <div
                key={index}
                className="mx-2 border-2 border-black p-1 flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`Movie poster ${index + 1}`}
                  className="w-24 h-36 object-cover"
                />
              </div>
            ))}
          </div>
          <img
            src="/images/filmstrip-right.jpg"
            className="h-full rotate-90"
            alt="Filmstrip right"
          />
        </div>
      </div>
    </div>
  );
};

export default FilmStrip;
