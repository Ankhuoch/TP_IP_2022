const express = require('express')
const { readFile } = require('fs');
const app = express()

app.get('/', function (req, res) {
    readFile('./index.html', 'utf8', (err, html) => {
        if(err) 
            res.status(500).send("Error");
        res.send(html)
    })
});

app.get('/detail', function (req, res) {
    readFile('./detail.html', 'utf8', (err, html) => {
        if(err) 
            res.status(500).send("Error");
        res.send(html)
    })
});

app.listen(3000, ()=> {
    console.log("You app is aviable on http://localhost:3000");
});
