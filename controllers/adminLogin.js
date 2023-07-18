const jwt= require('jsonwebtoken')

export const adminlog = async (req, res, next) => {
    try{
        const {email, password} = req.body;

        //bad request (user not authorized)
        if (email != process.env.NAME || password != process.env.PASSWORD){
            console.log(email)
            console.log(password)
            throw new Error("user not authorized")
        }

        const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET)

        return res.status(201).json({
            name: email,
            message: "welcome yohan",
            accessToken: accessToken
        })

        
    }
    catch(error) {
        next(error)
    }
};

export {adminlog};