'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const FilmStrip = ({ images }) => {
    const [translateY, setTranslateY] = useState(0);
  
    useEffect(() => {
      const animationDuration = 10000; 
      const stepSize = 1; 
      const interval = animationDuration / (images.length * 100); 
  
      const timer = setInterval(() => {
        setTranslateY(prev => {
          const newValue = prev - stepSize;
          return newValue <= -(images.length * 200) ? 0 : newValue;
        });
      }, interval);
  
      return () => clearInterval(timer);
    }, [images]);
  
    return (
      <div className="h-screen w-max bg-black overflow-hidden flex justify-between items-start flex-row flex-nowrap">
        <img src="/images/filmstrip-left.jpg" className='min-h-full' />
        <div style={{ transform: `translateY(${translateY}px)`, transition: 'transform 0.1s linear' }} className="flex flex-col">
          {
            [...images, ...images,...images].map((src, index) => (
                <div key={index} className="my-2 border-2 border-black p-1 flex-shrink-0">
                <img src={src} alt={`Movie poster ${index + 1}`} className="w-28 h-40 object-cover" />
                </div>
            ))
          }
        </div>
        <img src="/images/filmstrip-right.jpg" className='min-h-full' />
      </div>
    );
  };

export default FilmStrip
