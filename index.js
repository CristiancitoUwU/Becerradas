const express = require('express');
const servidor = express();
const colors = require('colors');
const dotenv = require('dotenv').config();
//const { append } = require('express/lib/response');
const os = require('os');

const port = process.env.PORT;

servidor.get('/', (req, res) => {
    res.send(`
    <h1>Qbo ${JSON.stringify(os.cpus()[0].model)} </h1>
    <h1>Secso </h1>
    `);
})

servidor.get('/info', (req, res) => {
    res.send(`${port}`);
})

servidor.listen(port, ()=> {
    console.log(`listening at https://localhost:${port}`.bgGreen.bold);
});

//npm i express
//npm i nodemon -D