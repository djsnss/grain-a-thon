"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NSSLogo from "./DJSNSSLogo.png"; // Example image
import axios from "axios";

const ProgressCarousel = ({ progressData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % progressData.length);
    }, 3000); // Automatically scrolls every 3 seconds
    return () => clearInterval(interval);
  }, [progressData.length]);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
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
              src={NSSLogo}
              alt={progressData[currentIndex]._id}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider">
                {progressData[currentIndex]._id}
              </h2>
              <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
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
    { _id: 'COMPS', totalGrainCollected: 100, color: '#f94144' },
    {  _id: 'IT', totalGrainCollected: 80, color: '#f3722c' },
    {  _id: 'CSDS', totalGrainCollected: 40, color: '#f8961e' },
    {  _id: 'AIML', totalGrainCollected: 90, color: '#f9c74f' },
    {  _id: 'AIDS', totalGrainCollected: 65, color: '#90be6d' },
    {  _id: 'ICB', totalGrainCollected: 45, color: '#43aa8b' },
    {  _id: 'EXTC', totalGrainCollected: 55, color: '#4d908e' },
    {  _id: 'MECH', totalGrainCollected: 55, color: '#577590' },
  ];


  async function fetchProgress() {
    try {
      const res = await axios.get(
        "http://localhost:8000/leaderboard/department"
      );
      setProgressData(res.data);
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
