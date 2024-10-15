import Donor from "../models/donor.js";

const DonorCreate = async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.status(201).send(donor);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find({});
    res.send(donors);
  } catch (error) {
    res.status(500).send(error);
  }
};

const UpdateDonor = async (req, res) => {
  try {
    const donor = await Donor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!donor) {
      return res.status(404).send();
    }
    res.send(donor);
  } catch (error) {
    res.status(400).send(error);
  }
};

const DeleteDonor = async (req, res) => {
  try {
    const donor = await Donor.findByIdAndDelete(req.params.id);
    if (!donor) {
      return res.status(404).send();
    }
    res.send(donor);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { DonorCreate, GetAllDonors, UpdateDonor, DeleteDonor };
