import User from "../models/user.js"; // Add .js if using ES modules

const deleteUserReservation = async (req, res, next) => {
  try {
    const { objectId } = req.params;

    const user = await User.findByIdAndDelete(objectId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(204).send(); // Success - No Content
  } catch (error) {
    next(error);
  }
};

export { deleteUserReservation };
