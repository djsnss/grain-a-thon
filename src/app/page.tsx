"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NSSLogo from "./DJSNSSLogo.png"; // Example image
import axios from "axios";
import Link from "next/link";

const ProgressCarousel = ({ progressData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % progressData.length);
    }, 3000); // Automatically scrolls every 3 seconds
    return () => clearInterval(interval);
  }, [progressData.length]);

  return (
    <div className="h-max w-[500px] flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-4xl">
        <AnimatePresence>
          <motion.div
            key={progressData[currentIndex]._id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden"
          >
            <Image
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Home() {
  const [progressData, setProgressData] = useState([]);

  let progressDataTest = [
    { _id: 'COMPS', totalGrainCollected: 100, color: '#f94144', img:'/images/th 9.jpg', link: "/branches/comps" },
    {  _id: 'IT', totalGrainCollected: 80, color: '#f3722c', img:'/images/th 10.jpg', link: "/branches/it" },
    {  _id: 'CSDS', totalGrainCollected: 40, color: '#f8961e', img:'/images/th 11.jpg', link: "/branches/csds" },
    {  _id: 'AIML', totalGrainCollected: 90, color: '#f9c74f', img:'/images/th 12.jpg', link: "/branches/aiml" },
    {  _id: 'AIDS', totalGrainCollected: 65, color: '#90be6d', img:'/images/th 13.jpg', link: "/branches/aids" },
    {  _id: 'ICB', totalGrainCollected: 45, color: '#43aa8b', img:'/images/th 14.jpg', link: "/branches/icb" },
    {  _id: 'EXTC', totalGrainCollected: 55, color: '#4d908e', img:'/images/th 15.jpg', link: "/branches/extc" },
    {  _id: 'MECH', totalGrainCollected: 55, color: '#577590', img:'/images/th 16.jpg', link: "/branches/mech" },
  ];


  async function fetchProgress() {
    try {
      const res = await axios.get(
        "http://localhost:8000/leaderboard/department"
      );
      setProgressData(() => res.data);
    } catch (error) {
      setProgressData(progressDataTest)
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

      <div className="my-4 py-2 px-4 text-3xl sm:text-5xl font-extrabold tracking-[10px] sm:tracking-[20px] border-4 border-black bg-[#FFFCE5] text-black">
        SHOWTIME
      </div>

      {/* Carousel */}
      {progressData.length > 0 ? (
        <ProgressCarousel progressData={progressData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
