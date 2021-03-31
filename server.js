const http = require('http');
const express = require('express');

const app = express();

http.createServer(app).listen(5000,function(){
    console.log("Server is listening on port 5000")
})

app.get('/', function(req, res){
    res.status(200).send("HELLO");
})