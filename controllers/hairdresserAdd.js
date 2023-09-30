import hairdresser from "../models/hairdressers";

export const hairdresserInfo = async (req,res,next) => {

    try {

        const {name} = req.body;

        hairdresser = await hairdresser.create({
            name
        })

        return res.status(201)
    }

    catch (error){
        next(error)
    }
}

export {hairdresserInfo}