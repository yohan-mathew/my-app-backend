

export const adminDashboard = async (req, res, next) => {
    try{
        if(req.cookies.loggedIn == 'true'){
            res.json({message: "welcome suzi"})

        }
        else{
            throw new Error ("user not authorized")
        }
    }
    catch(error) {
        next(error)
    }
}

export {adminDashboard}