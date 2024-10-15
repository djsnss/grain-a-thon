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
    { _id: 1, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 2, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 3, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 4, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 5, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 6, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 7, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 8, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 9, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 10, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 11, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 12, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 13, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 14, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 15, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 16, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 17, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 18, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 19, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 20, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 21, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 22, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 23, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
    { _id: 23, name: 'B C K Z G V', grainCollected: '2 6  K G S' },
  ];

  const fetchVolunteers = async () => {
    try {
      const volunteers =
        await volunteerService.getDepartmentVolunteers("Comps");
      setVolunteers(volunteers);
    } catch (error) {
      console.log("here")
      setVolunteers(volunteersTest)
      console.error("Failed to fetch volunteers:", error);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  return (
    <div className="volunteers-container w-full max-h-[40vh] flex flex-col justify-center overflow-y-auto">
      {volunteers.length > 0 ? (
        volunteers.map((volunteer) => (
          <div
            key={volunteer._id}
            className="volunteer-info flex justify-between p-3.5"
          >
            <div className="volunteer-name">{volunteer.name}</div>
            <div className="volunteer-phone">
              {volunteer.grainCollected} K G S
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-between">No volunteers found</div>
      )}
    </div>
  );
}
