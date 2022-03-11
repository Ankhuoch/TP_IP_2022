const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(require('./routes'));

app.listen(3001, () => console.log("You app is aviable on http://localhost:3001"));
