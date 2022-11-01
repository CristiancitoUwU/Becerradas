const express = require('express');
const servidor = express();
const colors = require('colors');
const config = require('./app/config');

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
    
    switch (process.env.ENVIROMENT){
        case 'development':
            console.log(`listening at https://localhost:${port}`.bgGreen.bold);
            break
        case 'production':
            console.log(`listening at https://localhost:${port}`.bgYellow.bold);
            break
        case 'qa':
            console.log(`listening at https://localhost:${port}`.bgRed.bold);
            break
    }
});

//npm i