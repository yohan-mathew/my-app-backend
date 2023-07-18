import express from "express";

const router = express.Router();
import { registerUser } from "../controllers/userControllers";
import { adminlog } from "../controllers/adminLogin";
import { userInfo } from "../controllers/getUsers";

router.post('/reserve', registerUser);
router.post('/login', adminlog);
router.get('/reserve', userInfo)

export default router;

