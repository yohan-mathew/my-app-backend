import User from "../models/user";

export const deleteUserReservation = async (req, res) => {
   try{
    const { objectId } = req.params;

    const query = User.findByIdAndDelete(objectId) // Create the query
    await query.exec();
    
   }
   catch(error) {
    next(error)
}
  };

  export {deleteUserReservation};