require('dotenv').config(); // This brings in the environment variable configuration library.

const express = require('express'); // This brings in the express library.
const app = express(); // assign express to the variable "app"
const port = process.env.PORT || 3000; // define the port for the server to listen on.

// Define a GET endpoint that returns "Hello world" to the user.
app.get('/test/', (req, res) => {
    res.send(`Hello world!`);
});

// Tell the app to listen on the defined port.
app.listen(port, () => {
    console.log(`API listening!!`);
});