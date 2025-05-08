import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorResponserHandler } from "./middleware/errorHandler.js";
import userRoute from "./routes/userRoutes.js";

const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const server = http.createServer(app);

// WebSocket setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  }
});

io.on("connection", (socket) => {
  socket.on("added_new", () => {
    socket.emit("new_user");
    socket.broadcast.emit("new_user");
  });
});

// Middlewares
app.use(cors());  // ✅ Enable CORS for frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/users', userRoute); // ✅ Correctly mounted

// Simple homepage
app.get('/', (req, res) => {
  res.send("server is running...");
});

// Error handler
app.use(errorResponserHandler);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server is running ON PORT ${PORT}`));
