"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { FaTrophy, FaBuilding, FaInfoCircle } from "react-icons/fa"; // Example icons

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Leaderboard",
      link: "/",
      icon: <FaTrophy />, // Add an icon for mobile view
    },
    {
      name: "Department",
      link: "#", // Placeholder link for dropdown
      icon: <FaBuilding />,
      submenu: [
        "COMPS",
        "IT",
        "AIDS",
        "AIML",
        "ICB",
        "MECH",
        "ELEX",
        "CS-DS",
      ], // Submenu departments
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
