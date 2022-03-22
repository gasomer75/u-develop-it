const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE api routes
app.use('/api', apiRoutes);

// Default response for bad requests (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// function to start Express.js server on PORT 3001
db.connect(err => {
  if (err) throw err;
  console.log('database connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});