var express = require('express');
var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "172.17.0.4",
  user: "root",
  password: "password",
  database: "test"
});

conn.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

var app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tasks', (req, res) => {
  conn.query("SELECT * FROM tasks", function(err, result) {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.post('/tasks', (req, res) => {
  conn.query(`INSERT INTO tasks (name, descr) VALUES('${req.body.name}', '${req.body.descr}')`, function(err, result) {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(80,  () => {
  console.log('Server running on port 80');
});
