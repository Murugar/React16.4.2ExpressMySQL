const express = require('express');
const app = express();
const mysql = require('mysql');
var users = [];

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'good1234',
    database : 'mysql'
});


db.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')



})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
