let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

app.get('/', function(req, res) {
    // res.send("Hello Express");
    let absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
    let response = ""
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello Json".toUpperCase();
    } else {
        response = "Hello Json";
    }
    res.json({"message": response});
});

























 module.exports = app;
