let dotenv = require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', function(req, res) {
    // res.send("Hello Express");
    let absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
    let messageStyle = dotenv.process.env.MESSAGE_STYLE;
    if (messageStyle === "uppercase") {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }    
});

























 module.exports = app;
