require('dotenv').config(); // This brings in the environment variable configuration library.

const express = require('express'); // This brings in the express library.
const app = express(); // assign express to the variable "app"
const port = process.env.PORT || 3000; // define the port for the server to listen on.

// Define a GET endpoint that returns "Hello world" to the user.
app.get('/test/', (req, res) => {
    res.send(`Hello y'all!`);
});

// Tell the app to listen on the defined port.
app.listen(port, () => {
    console.log(`API listening!!`);
});


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://testUser:<INSERT_PASSWORD_HERE>@schedule-app-cluster.tnz19.mongodb.net/schedule-app?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("schedule-app").collection("teams");
  // perform actions on the collection object

  var sampleTeam = {
    ID: 1,
    TeamName: "Sample Team",
    HomeCity: "Sample Home City",
    HomeVenueID: 1,
    HubID: 1
  };


  collection.insertOne(sampleTeam, {w: 1}, function(err, records){
  console.log("Error: " + err);

  client.close();
});
});