

import { getLog } from "../services/LogService"

export async function get(req, res, next) {
    const { filename, lastN = 10, filter = '' } = req.query;
    try {
        res.json(await getLog(filename, lastN, filter));
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
}


module.exports = {
    get
};