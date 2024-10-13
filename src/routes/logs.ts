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


/* POST programming language */
// router.post('/', logRouter.create);

// /* PUT programming language */
// router.put('/:id', logRouter.update);

// /* DELETE programming language */
// router.delete('/:id', logRouter.remove);

module.exports = router;