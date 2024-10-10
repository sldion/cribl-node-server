

import { getLog } from "../services/LogService"

export async function get(req, res, next) {
    const { userId, detail } = req.query;
    try {
        res.json(await getLog(req.query.page));
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
}


module.exports = {
    get
};