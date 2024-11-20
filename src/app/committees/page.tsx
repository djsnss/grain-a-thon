"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NSSLogo from "../DJSNSSLogo.png"; // Example image
import axios from "axios";
import '../page.css'
type ProgressData = {
  id: string;
  label: string;
  value: number;
  color: string;
  img: string;
};

type ProgressCarouselProps = {
  progressData: ProgressData[];
};

const ProgressCarousel: React.FC<ProgressCarouselProps> = ({ progressData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % progressData.length);
    }, 5000); // Automatically scrolls every 5 seconds
    return () => clearInterval(interval);
  }, [progressData.length]);

  return (
    <div className="h-[500px] w-[750px] flex justify-center items-center overflow-hidden">
      <div className="relative h-full w-full max-w-4xl">
        <AnimatePresence>
          <motion.div
            key={progressData[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden"
          >
            <div
              className="relative w-full h-[350px] mt-14 p-3 rounded-[14px] z-[1111] overflow-hidden flex flex-col items-center justify-center"
              style={{ backgroundColor: progressData[currentIndex].color }}
            >
              <div className="w-full h-full p-2 z-[2] bg-black backdrop-blur-[24px] rounded-[10px] overflow-hidden flex flex-col justify-end items-start">
                <img
                  src={progressData[currentIndex].img}
                  alt={progressData[currentIndex].label}
                  className="absolute h-full w-full top-0 left-0 opacity-80"
                />
                <div className="text-white text-3xl md:text-5xl font-extrabold tracking-wider mb-2 drop-shadow-lg">
                  {progressData[currentIndex].label}
                </div>
                <p className="text-white text-xl md:text-3xl font-semibold mt-2 drop-shadow-md">
                  {progressData[currentIndex].value} Kgs
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};


export default function Home() {
  const [progressData, setProgressData] = useState<ProgressData[]>([]);

  const progressDataTest: ProgressData[] = [
    { id: "1", label: "DJSNSS", value: 100, color: "#f94144", img:'/images/th 9.jpg' },
    { id: "2", label: "Trinity", value: 80, color: "#f3722c" , img:'/images/th 9.jpg'},
    { id: "3", label: "NOVA", value: 60, color: "#f8961e" , img:'/images/th 9.jpg'},
    { id: "4", label: "eXpress", value: 40, color: "#f9c74f" , img:'/images/th 9.jpg'},
    { id: "5", label: "Antariksh", value: 20, color: "#90be6d", img:'/images/th 9.jpg' },
    { id: "6", label: "Arya", value: 10, color: "#43aa8b" , img:'/images/th 10.jpg'},
    { id: "7", label: "Racing", value: 25, color: "#577590", img:'/images/th 10.jpg' },
    { id: "8", label: "Astra", value: 30, color: "#f94144" , img:'/images/th 10.jpg'},
    { id: "9", label: "Kronos", value: 50, color: "#f3722c" , img:'/images/th 10.jpg'},
    { id: "10", label: "Panache", value: 70, color: "#f9c74f" , img:'/images/th 11.jpg'},
    { id: "11", label: "LitSoc", value: 90, color: "#f3722c" , img:'/images/th 11.jpg'},
    { id: "12", label: "Dhadak", value: 85, color: "#f8961e", img:'/images/th 11.jpg' },
    { id: "13", label: "Skylark", value: 75, color: "#90be6d", img:'/images/th 11.jpg' },
    { id: "14", label: "Speedsters", value: 65, color: "#577590" , img:'/images/th 11.jpg'},
    { id: "15", label: "Compute", value: 55, color: "#43aa8b", img:'/images/th 12.jpg' },
    { id: "16", label: "S4DS", value: 45, color: "#f3722c", img:'/images/th 12.jpg' },
    { id: "17", label: "ACM", value: 35, color: "#f94144", img:'/images/th 12.jpg' },
    { id: "18", label: "IETE", value: 15, color: "#f9c74f", img:'/images/th 12.jpg' },
    { id: "19", label: "SAE", value: 5, color: "#f8961e", img:'/images/th 13.jpg' },
    { id: "20", label: "E-Cell", value: 5, color: "#90be6d", img:'/images/th 13.jpg' },
    { id: "21", label: "CSI", value: 50, color: "#577590", img:'/images/th 13.jpg' },
    { id: "22", label: "IEEE", value: 40, color: "#43aa8b" , img:'/images/th 14.jpg'},
    { id: "23", label: "GDSC", value: 30, color: "#f3722c", img:'/images/th 14.jpg' },
    { id: "24", label: "NSDC", value: 20, color: "#f94144", img:'/images/th 14.jpg' },
  ];

  async function fetchProgress() {
    try {
      const res = await axios.get("http://localhost:8000/committees");
      setProgressData(res.data);
    } catch (error) {
      setProgressData(progressDataTest);
      console.error("Error fetching leaderboard:", error);
    }
  }

  useEffect(() => {
    fetchProgress();
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col p-4">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:flex-wrap p-2">
        <div className="flex items-center gap-4 m-1">
          <Image src={NSSLogo} alt="NSS LOGO" className="h-16 w-16" />
          <p className="font-bold text-2xl sm:text-3xl tracking-widest">
            DJS NSS
          </p>
        </div>
        <p className="font-bold text-2xl sm:text-3xl tracking-widest">
          GRAIN-A-THON
        </p>
      </div>
      
      <div className="h-max w-full my-3 relative flex justify-center items-center flex-col flex-nowrap">
        <img src="/images/cinema.jpg" alt="background" className="h-max w-full aspect-video absolute top-0 left-0"/>
        <div className="mb-2 py-2 px-4 text-3xl sm:text-5xl font-extrabold tracking-[10px] sm:tracking-[20px] border-4 border-black bg-[#FFFCE5] text-black z-30 absolute -top-3 rounded-xl">SHOWTIME</div>

        {/* Carousel */}
        {progressData.length > 0 ? (
          <ProgressCarousel progressData={progressData} />
        ) : (
          <div className="h-[320px] w-[750px] flex justify-center items-center flex-col gap-2 mt-20 rounded-2xl z-30">
            <div className="text-2xl font-semibold text-black">Loading...</div>
            <div className="loader"></div>
          </div>
        )}
      </div>

    </div>
  );
}
