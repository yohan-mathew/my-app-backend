import User from "../models/user";


export const registerUser = async (req, res, next) => {
    

    try{
        const {name, barber, arrivalTime, service} = req.body;

        //checks if the user is already in line
        let user = await User.findOne({name,barber})

        
        if(user){
            //bad request
            
            throw new Error("name is already in line")
        }

        //adding the user in line 
        user = await User.create({
            name,
            barber,
            arrivalTime,
            service
        });

        return res.status(201).json({
            _id:user.id,
            name: user.name,
            barber: user.barber,
            arrivalTime: user.arrivalTime,
            service:user.service,
            time: user.createdAt
        })
    }
    catch (error) {
        next(error)
    }

};


export {registerUser};