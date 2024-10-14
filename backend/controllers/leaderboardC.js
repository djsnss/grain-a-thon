import Donor from "../models/donor.js";

const getDepartment = async (req, res) => {
  try {
    const leaderboard = await Donor.aggregate([
      {
        $group: {
          _id: "$department",
          totalGrainCollected: { $sum: "$grainCollected" },
        },
      },
      {
        $sort: { totalGrainCollected: -1 },
      },
    ]);
    res.send(leaderboard);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getIndividual = async (req, res) => {
  try {
    const leaderboard = await Donor.find({}).sort("-grainCollected").limit(10);
    res.send(leaderboard);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getDepartment, getIndividual };
