const express = require('express');
const fs = require("fs");

const app = express();
const data = fs.readFileSync(__dirname + "/index.html", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  
  

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log('server started');
});
