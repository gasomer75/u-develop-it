const mysql = require('mysql2');

// Connect to the database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password,
    password: 'Onebigword',
    database: 'election'
  });

module.exports = db;