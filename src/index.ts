import express, { Request, Response } from 'express';

import swaggerJsDoc from 'swagger-jsdoc';

const swaggerUi = require('swagger-ui-express')
const logRouter = require('./routes/logs');


const app = express();
const port = process.env.PORT || 3000;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Title',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Path to your route files
    filters: true, // Enable filters
};

const specs = swaggerJsDoc(options);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(specs, {
    filter: true, // Enable filters
}));
app.use('/api/logs', logRouter);



app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
