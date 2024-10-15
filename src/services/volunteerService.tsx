import axios from "axios";

export const volunteerService = {
  async getDepartmentVolunteers(department: string) {
    try {
      const response = await axios.get(
        `http://localhost:8000/leaderboard/departmentDonors/${department}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`${error}`) 
    }
  },
};
