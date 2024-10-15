'use client';
import { useEffect, useState } from 'react';
import './VolunteerInfo.css';
import { volunteerService } from '@/services/VolunteerService';

export interface Volunteer {
  _id: number,
  name: string,
  grainCollected: number
}

export default async function VolunteerInfo() {

  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  const fetchVolunteers = async () => {
    try {
      const volunteers = await volunteerService.getDepartmentVolunteers('Comps');
      setVolunteers(() => volunteers);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  return (
    <div className="volunteers-container w-full max-h-[40vh] flex flex-col justify-center overflow-y-auto">
      { volunteers.length > 0 ?
        volunteers.map((volunteer) => (
          <div key={volunteer._id} className="volunteer-info flex justify-between p-3.5">
            <div className="volunteer-name">{volunteer.name}</div>
            <div className="volunteer-phone">{volunteer.grainCollected} K G S</div>
          </div>
        )) :  (
          <div>No volunteers found</div>
        )
      }
    </div>
  );
}
