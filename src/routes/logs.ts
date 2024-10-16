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
 *     parameters: 
 *      - name: filename
 *        required: true
 *        description: filename of the log file
 *      - name: LastN
 *        requied: false
 *        default: 10
 *        description: Last N lines of the file
 *      - name: filter
 *        requied: false
 *        type: String
 *        default: ''
 *        description: filter the lines
 * 
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 * */
router.get('/logs', get);


module.exports = router;