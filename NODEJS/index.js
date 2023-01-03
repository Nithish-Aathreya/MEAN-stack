const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());

app.use(express.static('angularapp'));

app.listen(3000, () => console.log('Server started at port : 3000'));
app.use('/employees', employeeController);







