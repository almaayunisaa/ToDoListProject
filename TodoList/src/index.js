const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const bp = require('body-parser');
const todolistRoute = require('../route/todolistRoute');

const swaggerJSDoc = require('swagger-jsdoc')
const swaaggerUI = require('swagger-ui-express')

const options = {
    definition: {
        openapi : '3.0.0',
        info : {
            title: 'To Do List Project',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:5500/'
            }
        ]
    },
    apis:['./route/todolistRoute.js']
}

const swaaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaaggerUI.serve, swaaggerUI.setup(swaaggerSpec));

app.use(bp.json());
app.use('/api/todoList', todolistRoute);

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
});
