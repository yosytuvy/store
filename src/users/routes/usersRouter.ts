import express from 'express'
import { handleGetUsers, handleUserRegistration } from '../controller/controller-users';
const router = express.Router();

router.get('/getUsers', handleGetUsers);

router.post('/signup', handleUserRegistration)

export default router;