var express = require('express');
var mysql = require('mysql');
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

setup();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tasks', (req, res) => {
  Task.findAll()
    .then(tasks => {
      res.send(tasks);
    });
});

app.post('/tasks', (req, res) => {
  Task.create({
    name: req.body.name,
    descr: req.body.descr
  })
    .then(task => {
      res.send(task);
    });
});

app.listen(80,  () => {
  console.log('Server running on port 80');
});
