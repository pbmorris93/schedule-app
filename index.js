require('dotenv').config(); // This brings in the environment variable configuration library.
const bodyParser = require('body-parser');
const express = require('express'); // This brings in the express library.
const app = express(); // assign express to the variable "app"
const port = process.env.PORT || 3000; // define the port for the server to listen on.
app.use(bodyParser.json());
// Define a GET endpoint that returns "Hello world" to the user.
app.get('/test/', (req, res) => {
  res.send(`Hello y'all!`);
});

app.post('/Teams/', (req, res, next) => {

  const Joi = require('joi');
  const data = req.body;

  // Define the Team Schema
  const teamSchema = Joi.object().keys({
    teamName: Joi.string().required(),
    homeCity: Joi.string().required(),
    homeVenueId: Joi.number(),
    hubId: Joi.number(),
  });

  var result = teamSchema.validate(data);
    if (result.error) {
      res.status(422).json({
        status: 'error',
        message: 'Invalid request data',
        data: data
      });
    }

    else {
      var returnedData = null;
      client.connect(err => {
        const collection = client.db("schedule-app").collection("teams");
    
        // perform actions on the collection object
        collection.insertOne(data, { w: 1 }, function (err, records) {
          if(err){
            console.log("Error: " + err);
          }
          returnedData = records.insertedId;
          client.close();
        });
      });
      res.status(201).json({
        status: 'Created',
        message: 'Team created successfully',
        data: returnedData
      });
    }
});

// Tell the app to listen on the defined port.
app.listen(port, () => {
  console.log(`API listening!!`);
});

// Connect DB
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@schedule-app-cluster.tnz19.mongodb.net/schedule-app?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
