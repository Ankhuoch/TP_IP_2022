const { response } = require('express');
const express = require('express')
// const { readFile } = require('fs');
const app = express()

app.get('/', function (request, response) {
    // readFile('./index.html', 'utf8', (err, html) => {
    //     if(err) 
    //         res.status(500).send("Error");
    //     res.send(html)
    // })
    response.send("Hello");
});

app.get('/detail', function (request, response) {
    // readFile('./detail.html', 'utf8', (err, html) => {
    //     if(err) 
    //         res.status(500).send("Error");
    //     res.send(html)
    // })
    response.send("Hi");
});

app.listen(3001, ()=> {
    console.log("You app is aviable on http://localhost:3001");
});
