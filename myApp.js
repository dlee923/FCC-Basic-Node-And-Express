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
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello Json"});
    }    
});

























 module.exports = app;
