const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 2022;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {});
    
app.listen(port);
console.log('See where it all happens at http://localhost:'+port);