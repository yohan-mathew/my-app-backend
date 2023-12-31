import express from "express";

const router = express.Router();
import { registerUser } from "../controllers/userControllers";
import { adminlog } from "../controllers/adminLogin";
import { userInfo } from "../controllers/getUsers";
import { adminDashboard } from "../controllers/adminDashboard";
import {deleteUserReservation} from "../controllers/deleteUserReservation"
import { hairdresserInfo } from "../controllers/hairdresserAdd";

router.post('/reserve', registerUser);
router.post('/login', adminlog);
router.get('/reserve', userInfo)
router.post('/dashboard' , adminDashboard)
router.delete('/dashboard/:objectId', deleteUserReservation)
router.post('/dashboard/:name',hairdresserInfo )
export default router;

