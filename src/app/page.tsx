import FilmStrip from "@/components/FilmStrip";
import Image from "next/image";

export default function Home() {
  const poster1 = [
    "/images/th 1.png",
    "/images/th 2.png",
    "/images/th 3.png",
    "/images/th 4.png",
  ]
  
  const poster2 = [
    "/images/th 5.png",
    "/images/th 6.png",
    "/images/th 7.png",
    "/images/th 8.png",
  ]
  
  return (
    <div className="min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all">
      <div className="min-h-full w-full max-w-full flex justify-between items-start flex-nowrap bg-gradient-to-b from-[#A90202] to-[#430101]">
        
        <FilmStrip images={poster1} />
        
        {/* <div className="flex-grow bg-red-600 p-4">
          <div className="bg-white p-2 text-center text-3xl font-bold">SHOWTIME</div>
          <div className="mt-4 bg-yellow-300 p-2">
            <ul className="list-none">
              <li>COMPS</li>
              <li>IT</li>
              <li>CSDS</li>
              <li>AIML</li>
              <li>AIDS</li>
              <li>ICB</li>
              <li>EXTC</li>
            </ul>
          </div>
        </div> */}

        <div className="h-max w-max ">
          
        </div>
        
        <FilmStrip images={poster2} />
      
      </div>
    </div>
  );
}
