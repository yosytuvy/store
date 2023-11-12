import express from 'express'
import { getAllUsers } from '../controller/controller-users';
const router = express.Router();

router.get('/get-users', getAllUsers);

export default router;