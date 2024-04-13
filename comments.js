// Create web server
// Load the express library
const express = require('express');
// Load the body-parser library
const bodyParser = require('body-parser');
// Load the mysql library
const mysql = require('mysql');
// Load the cors library
const cors = require('cors');
// Load the path library
const path = require('path');
// Create the web server
const app = express();
// Set up the body-parser library
app.use(bodyParser.json());
// Set up the mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'comments'
});
// Connect to the mysql server
connection.connect();
// Set up the cors library
app.use(cors());
// Set up the path to serve files from the static directory
app.use(express.static(path.join(__dirname, 'static')));
// Set up the route to get all the comments
app.get('/comments', (req, res) => {
    // Perform the query to get all the comments
    connection.query('SELECT * FROM comments', (err, results) => {
        // Send the results back to the client
        res.json(results);
    });
});
// Set up the route to add a comment
app.post('/comments', (req, res) => {
    // Extract the comment from the request body
    const comment = req.body.comment;
    // Perform the query to add the comment
    connection.query('INSERT INTO comments (comment) VALUES (?)', [comment], (err, results) => {
        // Send the results back to the client
        res.json(results);
    });
});
// Start the web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});