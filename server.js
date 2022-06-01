const express = require('express');
const fs = require("fs");

const app = express();
const data = fs.readFile(__dirname + "/index.html");

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(80, () => {
  console.log('server started');
});
