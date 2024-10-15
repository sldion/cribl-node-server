import express from 'express';
const router = express.Router();

import { get } from "../controllers/logController"
import { getFilterParams } from '../utils/utils';

/* GET programming languages. */

/**
 * @swagger
 * /logs:
 *   get:
 *     summary: Get all logs
 *     tags: [Users]
 *     parameters: ${getFilterParams(router).map((param) => param).join(',')}
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 * */
router.get('/logs', get);


module.exports = router;