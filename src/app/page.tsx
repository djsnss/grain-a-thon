'use client'
import React, { useState,useEffect } from 'react';
import FilmStrip from "@/components/FilmStrip";
import BarGraph from '@/components/BarGraph';
import Navbar from '@/components/Navbar';


export default function Home() {
  const progressData = [
    { id: '1', label: 'COMPS', value: 100, color: '#f94144', },
    { id: '2', label: 'IT', value: 80, color: '#f3722c', },
    { id: '3', label: 'CSDS', value: 40, color: '#f8961e', },
    { id: '4', label: 'AIML', value: 90, color: '#f9c74f', },
    { id: '5', label: 'AIDS', value: 65, color: '#90be6d', },
    { id: '6', label: 'ICB', value: 45, color: '#43aa8b', },
    { id: '7', label: 'EXTC', value: 55, color: '#4d908e', },
    { id: '8', label: 'MECH', value: 55, color: '#577590', },
  ];
  
  const poster1 = [
    "/images/th 1.png",
    "/images/th 2.png",
    "/images/th 3.png",
    "/images/th 4.png",
    "/images/th 9.jpg",
    "/images/th 10.jpg",
    "/images/th 11.jpg",
    "/images/th 12.jpg",
  ]
  
  const poster2 = [
    "/images/th 5.png",
    "/images/th 6.png",
    "/images/th 7.png",
    "/images/th 8.png",
    "/images/th 13.jpg",
    "/images/th 14.jpg",
    "/images/th 15.jpg",
    "/images/th 16.jpg",
  ]
  
  return (
    <div className="cinema-background min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all">
      {/* <Navbar/> */}
      
      <div className="h-full w-full max-w-full flex justify-between items-start flex-nowrap from-[#A90202] to-[#430101]">
        
        <FilmStrip images={poster1} />

        <div className="h-max w-[70%] max-w-full flex justify-center items-center flex-col p-4">
          
          <div className="h-max w-full max-w-full p-2 flex justify-between items-center flex-row flex-wrap">
            
            <div className='h-max w-max max-w-full m-1 flex justify-between items-center gap-4'>
              <img src="/images/Nss new logo-1.png" alt="NSS LOGO" className="h-16 rounded-3xl"/>
              <p className="font-bold text-3xl m-1 tracking-widest">DJS NSS</p>
            </div>

            <p className="font-bold text-3xl m-1 tracking-widest">GRAIN-A-THON</p>
            
          </div>
          
          <div className="h-max w-max max-w-full my-2 pl-6 pr-4 py-2 text-5xl  font-extrabold tracking-[20px] border-4 border-black bg-[#FFFCE5] text-black">SHOWTIME</div>

          {/* Bar Graph */}
          <BarGraph data={progressData} />
          
          
        </div>
        
        <FilmStrip images={poster2} />
      
      </div>
    </div>
  );
}
