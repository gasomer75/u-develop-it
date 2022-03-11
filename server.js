const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Default response for bad requests (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// function to start Express.js server on PORT 3001
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});