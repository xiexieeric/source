var http = require("http");

console.log("This is the first line");

http.get("http://localhost:3000", function(res) {
    console.log("This is the second line");
});

console.log("This is the third line");
