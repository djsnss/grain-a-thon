"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    submenu?: string[];
  }[];
  className?: string;
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md z-[5000] pr-4 pl-8 py-2 items-center justify-center space-x-6 sm:space-x-8",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <div key={`nav-link-${idx}`} className="relative">
            <Link
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center justify-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-sm sm:text-base"
              )}
              onClick={() => navItem.submenu && setDropdownOpen(!isDropdownOpen)}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px justify-center" />
            </Link>
            {/* Dropdown for submenu */}
            {navItem.submenu && isDropdownOpen && (
              <ul className="absolute top-full mt-2 left-0 bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden z-[6000]">
                {navItem.submenu.map((submenuItem, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${submenuItem}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      {submenuItem}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
