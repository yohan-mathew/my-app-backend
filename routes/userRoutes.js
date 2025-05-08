import express from "express";
import { registerUser } from "../controllers/userControllers.js";
import { adminlog } from "../controllers/adminLogin.js";
import { userInfo } from "../controllers/getUsers.js";
import { adminDashboard } from "../controllers/adminDashboard.js";
import { deleteUserReservation } from "../controllers/deleteUserReservation.js";
import { hairdresserInfo, getHairdressers, deleteBarber } from "../controllers/hairdresserAdd.js";

const router = express.Router();

// User-related
router.post('/reserve', registerUser);      // Customer makes reservation
router.get('/reserve', userInfo);            // Fetch customers in line

// Admin-related
router.post('/login', adminlog);             // Admin login
router.post('/dashboard', adminDashboard);   // Admin dashboard auth
router.delete('/dashboard/:objectId', deleteUserReservation); // Delete customer reservation
router.delete('/barbers/:id', deleteBarber);

// Hairdresser/Barber-related
router.post('/barbers', hairdresserInfo);    // Add barber
router.get('/barbers', getHairdressers);      // Get list of barbers

export default router;

 