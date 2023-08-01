import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
const cookieParser = require('cookie-parser');
import { errorResponserHandler,invalidPathHandler } from "./middleware/errorHandler";

const path = require('path')


const jwt= require('jsonwebtoken')

// Routes
import userRoute from "./routes/userRoutes";

dotenv.config();
connectDB()
const app =express();
app.use(express.json());

app.use(express.static(path.join(__dirname+"/public")))

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res) => {
    res.send("server is running...")
});

app.use('/api/users', userRoute)

app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running ON PORT ${PORT}`));
