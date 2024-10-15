"use client";
import React from "react";
import BarGraph from "@/components/BarGraph";
import Image from "next/image";
import NSSLogo from "../DJSNSSLogo.png";

function Page() {
  const progressData = [
    { id: "1", label: "DJSNSS", value: 100, color: "#f94144" },
    { id: "2", label: "Trinity", value: 80, color: "#f3722c" },
    { id: "3", label: "NOVA", value: 60, color: "#f8961e" },
    { id: "4", label: "eXpress", value: 40, color: "#f9c74f" },
    { id: "5", label: "Antariksh", value: 20, color: "#90be6d" },
    { id: "6", label: "Arya", value: 10, color: "#43aa8b" },
    { id: "7", label: "Racing", value: 25, color: "#577590" },
    { id: "8", label: "Astra", value: 30, color: "#f94144" },
    { id: "9", label: "Kronos", value: 50, color: "#f3722c" },
    { id: "10", label: "Panache", value: 70, color: "#f9c74f" },
    { id: "11", label: "LitSoc", value: 90, color: "#f3722c" },
    { id: "12", label: "Dhadak", value: 85, color: "#f8961e" },
    { id: "13", label: "Skylark", value: 75, color: "#90be6d" },
    { id: "14", label: "Speedsters", value: 65, color: "#577590" },
    { id: "15", label: "Compute", value: 55, color: "#43aa8b" },
    { id: "16", label: "S4DS", value: 45, color: "#f3722c" },
    { id: "17", label: "ACM", value: 35, color: "#f94144" },
    { id: "18", label: "IETE", value: 15, color: "#f9c74f" },
    { id: "19", label: "SAE", value: 5, color: "#f8961e" },
    { id: "20", label: "E-Cell", value: 5, color: "#90be6d" },
    { id: "21", label: "CSI", value: 50, color: "#577590" },
    { id: "22", label: "IEEE", value: 40, color: "#43aa8b" },
    { id: "23", label: "GDSC", value: 30, color: "#f3722c" },
    { id: "24", label: "NSDC", value: 20, color: "#f94144" },
  ];

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

      {/* Bar Graph */}
      <div className="w-full flex justify-center"></div>
    </div>
  );
}

export default Page;
