import User from "../models/user";

 export const userInfo = async (req, res,next) => {
    try{const query = User.find({}, "name"); // Create the query
    const users = await query.exec(); // Execute the query
    console.log(users);
    const names = users.map((user) => user.name);
    res.json(names)}
    catch(error){
        next(error)
    }
 }

 export {userInfo}