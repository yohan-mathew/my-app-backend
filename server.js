import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { errorResponserHandler,invalidPathHandler } from "./middleware/errorHandler";
import userRoute from "./routes/userRoutes";
import { Socket } from "socket.io";


const cookieParser = require('cookie-parser');
const path = require('path')
const jwt= require('jsonwebtoken')


dotenv.config();
connectDB()
const app =express();

//creating a http server
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

// connect the websocket to the app
const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin: "https://lovetocut.com"
    }
},)

io.on("connection", (Socket) =>{

    Socket.on("added_new", () =>{
        Socket.emit("new_user")
        Socket.broadcast.emit("new_user")
    })
})


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

server.listen(PORT, () => console.log(`server is running ON PORT ${PORT}`));

