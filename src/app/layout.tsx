import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingNavDemo } from "@/components/Navbar";
import FilmStrip from "@/components/FilmStrip";
import NSSLogo from './DJSNSSLogo.png';
import bg from '../../public/images/background.svg';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Grain-A-Thon 2.0",
  description: "Grain donation drive by the only social service committee of D.J. Sanghvi NSS",
};

// Data for the film strip posters
const poster1 = [
  "/images/th 1.png",
  "/images/th 2.png",
  "/images/th 3.png",
  "/images/th 4.png",
  "/images/th 9.jpg",
  "/images/th 10.jpg",
  "/images/th 11.jpg",
  "/images/th 12.jpg",
];

const poster2 = [
  "/images/th 5.png",
  "/images/th 6.png",
  "/images/th 7.png",
  "/images/th 8.png",
  "/images/th 13.jpg",
  "/images/th 14.jpg",
  "/images/th 15.jpg",
  "/images/th 16.jpg",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/DJSNSSLogo.png"
        />
        <link
          rel="mask-icon"
          href="/DJSNSSLogo.png"
          color="#000000"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNavDemo />
        <div className="min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all">  
          <div className="h-full w-full max-w-full flex flex-col lg:flex-row justify-between items-start flex-nowrap bg-gradient-to-b from-red-500 to-red-950 cinema-background-home">
            <div className="w-full lg:w-[15%]">
              <FilmStrip images={poster1} />
            </div>

            {/* Dynamic Main Content */}
            <div className="w-[73%] flex justify-center items-center flex-col">
              {children}
            </div>

            {/* Film Strip on the right */}
            <div className="w-full flex justify-end lg:w-[15%]">
              <FilmStrip images={poster2} />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
