const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connect mongodb
require('./configs/db')();

app.use(require('./routes'));

app.listen(process.env.PORT || 3001, () => console.log("You app is aviable on http://localhost:3001"));
