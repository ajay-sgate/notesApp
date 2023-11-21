const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodebackend',
  });

db.connect(function (err) {
  if (err) throw err;
  console.log('Connected to the Database!');
});

module.exports = db;