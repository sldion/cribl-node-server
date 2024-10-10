import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;


const logRouter = require('./routes/logs');

app.use('/logs', logRouter);


app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
