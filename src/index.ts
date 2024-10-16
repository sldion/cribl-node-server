import express, { Request, Response } from 'express';

import swaggerJsDoc from 'swagger-jsdoc';

const swaggerUi = require('swagger-ui-express')
const logRouter = require('./routes/logs');


export const app = express();
const port = process.env.PORT || 3000;

app.use('/api', logRouter);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Title',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Path to your route files
    filters: true, // Enable filters
};

const specs = swaggerJsDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// app.get('/api-docs', swaggerUi.setup(specs, {
//     filter: true, // Enable filters
// }));




app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


