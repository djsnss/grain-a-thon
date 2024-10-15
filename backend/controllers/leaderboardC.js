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

const getDepartmentDonors = async (req, res) => {
  try {
    const { department } = req.params;
    const leaderboard = await Donor.find({ department })
      .sort("-grainCollected")
      .limit(10);
    res.send(leaderboard);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const leaderboard = await Donor.find({}).sort("-grainCollected").limit(10);
    res.send(leaderboard);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCommittee = async (req, res) => {
  try {
    const leaderboard = await Donor.aggregate([
      {
        $group: {
          _id: "$committee",
          totalGrainCollected: { $sum: "$grainCollected" },
        },
      },
      {
        $sort: { totalGrainCollected: -1 },
      },
    ]);
    res.send(leaderboard);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getDepartment, getDepartmentDonors, getCommittee, getAll };
