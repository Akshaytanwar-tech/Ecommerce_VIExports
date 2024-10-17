const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
  host: 'localhost',  // Update if necessary
  user: 'root',       // Your MySQL username
  password: '@Akshay2574', // Your MySQL password
  database: 'ecommerce'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL Database');
});

module.exports = db;
