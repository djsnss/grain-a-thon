"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NSSLogo from "./DJSNSSLogo.png";
import axios from "axios";
import Link from "next/link";
import "./page.css";
interface ProgressDataItem {
  [branch: string]: {
    totalGrainCollected: number;
    Rice: number;
    Wheat: number;
  };
}
interface Entry {
  Branch?: string;
  Rice?: string | number;
  Wheat?: string | number;
}

interface BranchTotals {
  [branch: string]: {
    Rice: number;
    Wheat: number;
  };
}

type Progress = {
  [branch: string]: {
    totalGrainCollected: number;
    Rice: number;
    Wheat: number;
  };
};

interface ProgressConstants {
  [branch: string]: {
    color: string;
    img: string;
    link: string;
  };
}

interface ProgressCarouselProps {
  progressData: ProgressDataItem[];
  progressDataConstants: ProgressConstants;
}

const ProgressCarousel: React.FC<ProgressCarouselProps> = ({ progressData, progressDataConstants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % progressData.length;
        setCurrentId(Object.keys(progressData[nextIndex])[0]);
        return nextIndex;
      });
    }, 5000); // Automatically scrolls every 5 seconds
    return () => clearInterval(interval);
  }, [progressData]);

  return (
    <div className="h-full w-[90%] sm:w-[80%] lg:w-[60%] flex justify-center items-center overflow-hidden">
      <div className="relative h-full w-full">
        <AnimatePresence>
          <motion.div
            key={Object.keys(progressData[currentIndex])[0]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden mt-12"
          >
            <div className="relative w-full h-[70vh] p-3 rounded-[14px] flex flex-col items-center justify-center overflow-hidden z-[1111]">
              {/* <div
                className="blob"
                style={{ backgroundColor: progressDataConstants[currentId]?.color }}
              ></div> */}
              <div className="w-full h-full p-2 z-[2] bg-black bg-opacity-80 backdrop-blur-md rounded-[10px] flex flex-col justify-end items-start relative">
                <img
                  src={progressDataConstants[currentId]?.img}
                  alt={Object.keys(progressData[currentIndex])[0]}
                  className="absolute h-full w-full top-0 left-0 opacity-80 object-cover rounded-2xl "
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-2xl"></div>
                <div className="p-10">
                  <Link
                    href={`/branches/${Object.keys(progressData[currentIndex])[0]
                      }`}
                    className="text-white text-xl sm:text-3xl lg:text-7xl font-extrabold tracking-wider mb-2 drop-shadow-lg z-[10] uppercase"
                  >
                    {Object.keys(progressData[currentIndex])[0]}
                  </Link>
                  <p className="text-white text-lg sm:text-2xl lg:text-5xl font-semibold mt-2 drop-shadow-md z-[10]">
                    {
                      progressData[currentIndex][
                        Object.keys(progressData[currentIndex])[0]
                      ].totalGrainCollected
                    }{" "}
                    Kgs
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Home() {
  const [progressData, setProgressData] = useState<Progress[]>([]);

  const progressDataConstants = {
    comps: {
      color: "#f94144",
      img: "/images/poster1.jpg",
      link: "/branches/comps",
    },
    it: {
      color: "#f3722c",
      img: "/images/poster2.jpg",
      link: "/branches/it"
    },
    csds: {
      color: "#f8961e",
      img: "/images/poster3.jpg",
      link: "/branches/csds",
    },
    aiml: {
      color: "#f9c74f",
      img: "/images/poster4.jpg",
      link: "/branches/aiml",
    },
    aids: {
      color: "#90be6d",
      img: "/images/poster5.jpg",
      link: "/branches/aids",
    },
    icb: {
      color: "#43aa8b",
      img: "/images/poster6.jpg",
      link: "/branches/icb",
    },
    extc: {
      color: "#4d908e",
      img: "/images/poster7.jpg",
      link: "/branches/extc",
    },
    mech: {
      color: "#577590",
      img: "/images/poster8.jpg",
      link: "/branches/mech",
    },
  };

  async function fetchProgress() {
    try {
      console.log("Fetching data from API:", process.env.NEXT_PUBLIC_API_URL);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/data`);
      const data: Entry[] = res.data || [];
  
      console.log("Fetched raw data:", data);
  
      const branchTotals: BranchTotals = {};
  
      data.forEach((entry: Entry) => {
        const branch = entry.Branch?.toLowerCase();
        const riceAmount = parseInt(entry.Rice as string) || 0;
        const wheatAmount = parseInt(entry.Wheat as string) || 0;
  
        if (branch) {
          branchTotals[branch] = branchTotals[branch] || { Rice: 0, Wheat: 0 };
          branchTotals[branch].Rice += riceAmount;
          branchTotals[branch].Wheat += wheatAmount;
        }
      });
  
      console.log("Processed branch totals:", branchTotals);
  
      const formattedProgressData: Progress[] = Object.entries(branchTotals).map(
        ([branch, totals]) => ({
          [branch]: {
            totalGrainCollected: totals.Rice + totals.Wheat,
            Rice: totals.Rice,
            Wheat: totals.Wheat,
          },
        })
      );
  
      console.log("Formatted progress data set:", formattedProgressData);
      setProgressData(formattedProgressData);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error fetching progress data:", error.response?.data || error.message);
      } else {
        console.error("Error fetching progress data:", error);
      }
    }
  }
  useEffect(() => {
    fetchProgress();
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col p-4">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:flex-wrap mb-2 md:m-1 p-2">
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
        {/* <img
          src="/images/cinema.jpg"
          alt="background"
          className="h-max w-full hidden md:block aspect-video absolute top-0 left-0"
        /> */}
        <div className="mb-2 py-2 px-4 text-3xl sm:text-5xl font-extrabold tracking-[10px] sm:tracking-[20px] border-4 border-black bg-[#FFFCE5] text-black z-30 absolute -top-3 rounded-xl">
          SHOWTIME
        </div>

        {/* Carousel */}
        {progressData.length > 0 ? (
          <ProgressCarousel
            progressData={progressData}
            progressDataConstants={progressDataConstants}
          />
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
