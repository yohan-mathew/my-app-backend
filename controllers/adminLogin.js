const jwt= require('jsonwebtoken')


export const adminlog = async (req, res, next) => {
    try{
        const {email, password} = req.body;

        //bad request (user not authorized)
        if (email != process.env.NAME || password != process.env.PASSWORD){
            throw new Error("user not authorized")
        }

        
        res.cookie('loggedIn', true);
        res.send("welcome suzi")
        
    }
    catch(error) {
        next(error)
    }
};

export {adminlog};