import hairdresser from "../models/hairdressers.js";

// Add a new barber (hairdresser)
export const hairdresserInfo = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Barber name is required" });
    }

    const newHairdresser = await hairdresser.create({ name });

    return res.status(201).json(newHairdresser); // Return created barber
  } catch (error) {
    next(error);
  }
};

export const getHairdressers = async (req, res, next) => {
    try {
      const hairdressers = await hairdresser.find();
      res.status(200).json(hairdressers);   // ✅ Must send array
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteBarber = async (req, res, next) => {
    try {
      const { id } = req.params;
      const removed = await hairdresser.findByIdAndDelete(id);
      if (!removed) {
        return res.status(404).json({ message: "Barber not found" });
      }
      res.status(200).json({ message: "Barber deleted" });
    } catch (error) {
      next(error);
    }
  };

export {hairdresserInfo, getHairdressers, deleteBarber};

