import express from 'express';
const router = express.Router();



import { get } from "../controllers/logController"

/* GET programming languages. */
router.get('/', get);


/* POST programming language */
// router.post('/', logRouter.create);

// /* PUT programming language */
// router.put('/:id', logRouter.update);

// /* DELETE programming language */
// router.delete('/:id', logRouter.remove);

module.exports = router;