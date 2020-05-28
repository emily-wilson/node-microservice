var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var Task = require('./models');
const db = require('./db');

async function setup() {
  try {
    await db.authenticate();
    console.log("Connected!");
  } catch(error) {
    console.error('Unable to connect to database:', error);
  }

  try {
    await db.sync();
    console.log("All models were synchronized successfully");
  } catch(error) {
    console.log("Error synchronizing models:", error);
  }
}

var app = express();
app.use(express.json());
app.use(cors());

setup();

app.get('/api/tasks', (req, res) => {
  console.log('hit tasks endpoint');
  Task.findAll()
    .then(tasks => {
      res.send(tasks);
    });
});

app.post('/api/tasks', (req, res) => {
  Task.create({
    name: req.body.name,
    descr: req.body.descr
  })
    .then(task => {
      res.send(task);
    });
});

app.listen(8080, '0.0.0.0',  () => {
  console.log('Server running on port 80');
});
