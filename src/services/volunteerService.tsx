import axios from "axios";
import { Volunteer } from "@/components/VolunteerInfo";

export const volunteerService = {
  async getDepartmentVolunteers(department: string): Promise<Volunteer[]> {
    try {
      const response = await axios.get('http://localhost:8000/leaderboard/departmentDonors/Comps');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);  // Handle error
    }
    return []
  },
};
