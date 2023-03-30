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
        response = {"message": "HELLO JSON"}
    } else {
        response = {"message": "Hello Json"}
    }
    res.json(response);
});

























 module.exports = app;
