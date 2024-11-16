var express = require("express");
var cors = require("cors");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();

app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";

const { MongoClient } = require("mongodb");
// MongoDB
const url = "mongodb://127.0.0.1:27017";
const dbName = "secoms3190";
const client = new MongoClient(url);

let db;

async function startServer() {
  await client.connect();
  db = client.db(dbName);
  console.log("Connected to MongoDB");

  app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
  });
}

startServer();

app.get("/listRobots", async (req, res) => {
  console.log("Node connected successfully to GET MongoDB");

  const query = {};
  const results = await db.collection("robots").find(query).limit(100).toArray();
  console.log(results);

  res.status(200).send(results);
});

app.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const query = { id: id };
  
  const results = await db.collection("robots").findOne(query);
  console.log("Results :", results);

  if (!results) {
    res.status(404).json({ error: "Not Found" });
  } else {
    res.status(200).json(results);
  }
});

app.post("/robot", async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) { 
      return res.status(400).send({ error: 'Bad request: No data provided.' });
    }

    const newDocument = {
      id: 4,
      name: "nathan voung",
      price: 87.5,
      description: "nathan as a robot",
      imageUrl: "https://robohash.org/nathanvoung"
    };

    console.log(newDocument);

    // Validate if the new robot already exists
    const existingDoc = await db.collection("robots").findOne({ id: newDocument.id });
    if (existingDoc) {
      return res.status(409).send({ error: "Conflict: A robot with this ID already exists." });
    }

    const results = await db.collection("robots").insertOne(newDocument);
    res.status(201).send(results); // Use 201 status code for successful creation
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send({ error: 'An internal server error occurred' });
  }
});

app.delete("/robot/:id", async (req, res) => {
  try {
    // Read parameter id
    const id = Number(req.params.id);
    console.log("Robot to delete:", id);

    // Read data from the robot to delete
    const query = { id: id };
    const robotDeleted = await db.collection("robots").findOne(query);
    
    // If the robot is not found
    if (!robotDeleted) {
      return res.status(404).send({ error: "Robot not found" });
    }

    // Delete by its id
    await db.collection("robots").deleteOne(query);
    
    // Response to Client
    res.status(200).send(robotDeleted);
  } catch (error) {
    console.error("Error deleting robot:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.put("/robot/:id", async (req, res) => {
  const id = Number(req.params.id); // Read parameter id
  console.log("Robot to Update :",id);
  await client.connect(); // Connect Mongodb
  const query = { id: id }; // Update by its id
  // Data for updating the document, typically comes from the request body
  console.log(req.body);
  const updateData = {
  $set:{
  "name": req.body.name,
  "price": req.body.price,
  "description": req.body.description,
  "imageUrl": req.body.imageUrl
  }
  };
  // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
  const options = { };
  const results = await db.collection("robot").updateOne(query, updateData, options);
  res.status(200); // Response to Client
  res.send(results);
  });