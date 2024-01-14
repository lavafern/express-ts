import express, { Router } from 'express';
import { register } from '../../controllers/auth.controller';

const router : Router = express.Router();

router.post('/p',register);

export default router;