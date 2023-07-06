var express = require('express');
var app = express();
const port = 80;

var server = app.listen(port, function () {
	console.log("sever start");
});

app.get("/", function (req, res) {
	res.send("Hello Node.js!");
});
