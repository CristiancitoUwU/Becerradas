const path = require('path');
const envPath = `enviroments/${process.env.ENVIROMENT}.env`;

const port = process.env.PORT;


console.log(process.env.ENVIROMENT);
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, envPath)
});

module.exports = callback = ()=>{
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
}