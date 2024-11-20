"use client";
import { useEffect, useState } from "react";
import "./VolunteerInfo.css";
import { volunteerService } from "../services/volunteerService";

export interface Volunteer {
  _id: number;
  name: string;
  grainCollected: number;
}

export default function VolunteerInfo() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  let volunteersTest = [
    { _id: 1, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 2, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 3, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 4, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 5, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 6, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 7, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 8, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 9, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 10, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 11, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 12, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 13, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 14, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 15, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 16, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 17, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 18, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 19, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 20, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 21, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 22, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 23, name: 'B C K Z G V', grainCollected: 26 },
    { _id: 24, name: 'B C K Z G V', grainCollected: 26 },
  ];

  const fetchVolunteers = async () => {
    try {
      const volunteers =
        await volunteerService.getDepartmentVolunteers("Comps");
      setVolunteers(volunteers);
    } catch (error) {
      setVolunteers(volunteersTest)
      console.error("Failed to fetch volunteers:", error);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  return (
    <div className="volunteers-container text-xl w-full md:max-h-[40vh] max-h-[60vh] flex flex-col justify-center">
      {volunteers.length > 0 ? (
        volunteers.map((volunteer) => (
          <div
            key={volunteer._id}
            className="volunteer-info flex justify-between p-3.5"
          >
            <div className="volunteer-name">{volunteer.name}</div>
            <div className="volunteer-phone">
              <p>{volunteer.grainCollected} KGS</p>
            </div>
          </div>
        ))
      ) : (
      <div className="h-[320px] w-[750px] flex justify-center items-center flex-col gap-2 mt-20 rounded-2xl z-30">
        <div className="text-2xl font-semibold text-black">Loading...</div>
        <div className="loader"></div>
      </div>
  )}
    </div>
  );
}
