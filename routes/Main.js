import { Router } from 'express';
const router = Router();

import { Main } from '../controllers/Main.js';

const main = new Main();

router.get("/", main.GetHome);

export default router;