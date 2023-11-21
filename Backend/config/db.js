const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodebackend",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})


module.exports = db;