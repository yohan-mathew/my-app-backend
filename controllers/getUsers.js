import User from "../models/user";

 export const userInfo = async (req, res,next) => {
    try{
        const query = User.find({}); // Create the query
        const users = await query.exec(); // Execute the query
        const names = users.map((user) => ({name:user.name, barber:user.barber, service:user.service, arrivalTime:user.arrivalTime, time:user.createdAt, id: user._id}));
        res.json(names)
    }
    catch(error){
        next(error)
    }
 }

 export {userInfo}