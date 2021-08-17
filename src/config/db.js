//Mysql
const mysql = require('mysql');

//Variables de entorno
require('dotenv').config({ path: 'variables.env' });

const conectarDB =  mysql.createConnection({
    host: process.env.HOST ,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASES

});

conectarDB.connect(function(error){
    if(error){
        console.log(error);
        return;
    } else {
        console.log('base de datos online...');
    }
});

module.exports = conectarDB;