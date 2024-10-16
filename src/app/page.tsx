"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NSSLogo from "./DJSNSSLogo.png"; // Example image
import axios from "axios";
import Link from "next/link";
import "./page.css";

const ProgressCarousel = ({ progressData, progressDataConstants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % progressData.length;
        setCurrentId(progressData[nextIndex]._id);
        return nextIndex;
      });
    }, 5000); // Automatically scrolls every 5 seconds
    return () => clearInterval(interval);
  }, [progressData]);

  return (
    <div className="h-[300px] w-[90%] sm:w-[80%] lg:w-[60%] flex justify-center items-center overflow-hidden">
      <div className="relative h-full w-full">
        <AnimatePresence>
          <motion.div
            key={progressData[currentIndex]._id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden"
          >
<<<<<<< HEAD
            <div className="relative w-full h-full p-3 rounded-[14px] flex flex-col items-center justify-center overflow-hidden z-[1111]">
=======
            {/* <Image
              src={progressData[currentIndex].img}
              alt={progressData[currentIndex]._id}
              layout="fill"
              objectFit=""
              className="rounded-xl scale-90"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-start p-8 md:p-12"
              style={{ background: `linear-gradient(to top, ${progressData[currentIndex].color}, transparent)`}}>
              <Link href={progressData[currentIndex].link} className="text-white text-3xl md:text-5xl font-extrabold tracking-wider mb-2 drop-shadow-lg">
                {progressData[currentIndex]._id}
              </Link>
              <p className="text-white text-xl md:text-3xl font-semibold mt-2 drop-shadow-md">
                {progressData[currentIndex].totalGrainCollected} Kgs
              </p>
            </div> */}

            <div className="relative w-full h-[250px] md:h-[350px] mt-14 p-3 rounded-[14px] z-[1111] overflow-hidden flex flex-col items-center justify-center">
>>>>>>> a567589097c59f15ed514f2bbef60fc9fe1965e0
              <div
                className="blob"
                style={{ backgroundColor: progressDataConstants[currentId]?.color }}
              ></div>
              <div className="w-full h-full p-2 z-[2] bg-black bg-opacity-60 backdrop-blur-md rounded-[10px] flex flex-col justify-end items-start relative">
                <img
                  src={progressDataConstants[currentId]?.img}
                  alt={progressData[currentIndex]._id}
                  className="absolute h-full w-full top-0 left-0 opacity-80 object-cover"
                />
                <Link
                  href={`/branches/${progressData[currentIndex]._id}`}
                  className="text-white text-xl sm:text-3xl lg:text-5xl font-extrabold tracking-wider mb-2 drop-shadow-lg z-[10]"
                >
                  {progressData[currentIndex]._id}
                </Link>
                <p className="text-white text-lg sm:text-2xl lg:text-3xl font-semibold mt-2 drop-shadow-md z-[10]">
                  {progressData[currentIndex].totalGrainCollected} Kgs
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
  const [progressData, setProgressData] = useState([]);

  let progressDataConstants = {
    COMPS: { color: "#f94144", img: "/images/poster1.jpg", link: "/branches/comps" },
    IT: { color: "#f3722c", img: "/images/poster2.jpg", link: "/branches/it" },
    CSDS: { color: "#f8961e", img: "/images/poster3.jpg", link: "/branches/csds" },
    AIML: { color: "#f9c74f", img: "/images/poster4.jpg", link: "/branches/aiml" },
    AIDS: { color: "#90be6d", img: "/images/poster5.jpg", link: "/branches/aids" },
    ICB: { color: "#43aa8b", img: "/images/poster6.jpg", link: "/branches/icb" },
    EXTC: { color: "#4d908e", img: "/images/poster7.jpg", link: "/branches/extc" },
    MECH: { color: "#577590", img: "/images/poster8.jpg", link: "/branches/mech" },
  };

  let progressDataTest = [
    { _id: 'COMPS', totalGrainCollected: 100 },
    { _id: 'IT', totalGrainCollected: 80 },
    { _id: 'CSDS', totalGrainCollected: 40 },
    { _id: 'AIML', totalGrainCollected: 90 },
    { _id: 'AIDS', totalGrainCollected: 65 },
    { _id: 'ICB', totalGrainCollected: 45 },
    { _id: 'EXTC', totalGrainCollected: 55 },
    { _id: 'MECH', totalGrainCollected: 55 },
  ];

  async function fetchProgress() {
    try {
      const res = await axios.get("http://localhost:8000/leaderboard/department");
      setProgressData(res.data);
    } catch (error) {
      setProgressData(progressDataTest); // Use test data on error
      console.error("Error fetching leaderboard:", error);
    }
  }

  useEffect(() => {
    fetchProgress();
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col p-4">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:flex-wrap mb-2 md:m-1 p-2">
        <div className="flex items-center gap-4 m-1 ">
          <Image src={NSSLogo} alt="NSS LOGO" className="h-16 w-16" />
          <p className="font-bold text-2xl sm:text-3xl tracking-widest">DJS NSS</p>
        </div>
        <p className="font-bold text-2xl sm:text-3xl tracking-widest">GRAIN-A-THON</p>
      </div>
      <div className="h-max w-full my-3 relative flex justify-center items-center flex-col flex-nowrap">
        <img
          src="/images/cinema.jpg"
          alt="background"
          className="h-max w-full hidden md:block aspect-video absolute top-0 left-0"
        />
        <div className="mb-2 py-2 px-4 text-3xl sm:text-5xl font-extrabold tracking-[10px] sm:tracking-[20px] border-4 border-black bg-[#FFFCE5] text-black z-30 absolute -top-3 rounded-xl">
          SHOWTIME
        </div>

        {/* Carousel */}
        {progressData.length > 0 ? (
          <ProgressCarousel progressData={progressData} progressDataConstants={progressDataConstants} />
        ) : (
          <div className="h-[150px] w-[250px] md:h-[320px] md:w-[750px] flex justify-center items-center flex-col gap-3 md:mt-20 rounded-2xl z-30">
            <div className="text-2xl font-semibold text-black">Loading...</div>
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
}
