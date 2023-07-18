import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { errorResponserHandler,invalidPathHandler } from "./middleware/errorHandler";

const jwt= require('jsonwebtoken')

// Routes
import userRoute from "./routes/userRoutes";

dotenv.config();
connectDB()
const app =express();
app.use(express.json());

app.get('/',(req,res) => {
    res.send("server is running...")
});


app.use('/api/users', userRoute)

app.use(invalidPathHandler);

app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running ON PORT ${PORT}`));