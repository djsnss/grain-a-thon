"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { FaTrophy, FaBuilding } from "react-icons/fa";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Leaderboard",
      link: "/",
      icon: <FaTrophy />,
    },
    {
      name: "Department",
      link: "#",
      icon: <FaBuilding />,
      submenu: [
        { name: "COMPS", link: "/branches/comps" },
        { name: "IT", link: "/branches/it" },
        { name: "AIDS", link: "/branches/aids" },
        { name: "AIML", link: "/branches/aiml" },
        { name: "ICB", link: "/branches/icb" },
        { name: "MECH", link: "/branches/mech" },
        { name: "ELEX", link: "/branches/elex" },
        { name: "CS-DS", link: "/branches/cs-ds" },
      ],
    },
    {
      name: "Committees",
      link: "/committees",
    }
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
