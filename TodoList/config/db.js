const mysql = require('mysql2');

// Membuat koneksi ke database
const connection = 
mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_todo'
})

connection.connect((err)=> {
    if (err) throw err;
    console.log('Terkoneksi ke Database');
});

module.exports=connection;