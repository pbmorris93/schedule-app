require('dotenv').config(); // This brings in the environment variable configuration library.

const express = require('express'); // This brings in the express library.
const app = express(); // assign express to the variable "app"
const port = process.env.PORT || 3000; // define the port for the server to listen on.

app.get('/test/', (req, res) => {
    res.send(`Hello world!`);
});

app.listen(port, () => {
    console.log(`API listening!!`);
});