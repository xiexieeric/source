var express = require("express");
var app = express();

var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(3000);
console.log("Listening on port 3000");

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on('connection', function (socket) {
    socket.on('some event', function (data) {
        console.log(data);
    });
});
