

import { getLog } from "../services/LogService"

export async function get(req, res, next) {
    const { filename, lastN = 10, filter = '' } = req.query;
    if (filename === undefined) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Filename is required',
        });
    }
    if (!Number.isInteger(lastN)) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'lastN is not a number',
        });
    }
    try {
        res.json(await getLog(filename, lastN, filter));
    } catch (err) {
        console.error(`Error while getting logs:`, err.message);
        next(err);
    }
}


module.exports = {
    get
};