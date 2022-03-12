const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to the database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password,
    password: 'Onebigword',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for bad requests (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// function to start Express.js server on PORT 3001
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});