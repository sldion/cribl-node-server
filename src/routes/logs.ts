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
 *     tags: [Logs]
 *     parameters: 
 *      - name: filename
 *        in: query
 *        type: String
 *        required: true
 *        description: filename of the log file
 *      - name: LastN
 *        in: query
 *        requied: false
 *        default: 10
 *        description: Last N lines of the file
 *      - name: filter
 *        in: query
 *        requied: false
 *        type: String
 *        default: ''
 *        description: filter the lines
 *     responses:
 *       200:
 *         description: logs retrieved successfully
 * */
router.get('/logs', get);


module.exports = router;