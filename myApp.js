let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

// to be able to install the html file
app.get('/', function(req, res) {
    // res.send("Hello Express");
    let absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

// to MOUNT the CSS file in the public folder
app.use('/public', express.static(__dirname + '/public'));

// to apply .env variables
app.get('/json', function(req, res) {
    let response = "Hello Json"
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = response.toUpperCase();
        res.json({'message': response});
    } else {
        res.json({'message': response});
    }
});

app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({time: req.time});
})

app.get('/:word/echo', function(req, res, next) {
    let echoServer = {"echo": req.params.word};
    res.json(echoServer);
});

app.get('/name', function(req, res, next) {
    let object = {"name": req.query.first + " " + req.query.last};
    res.json(object);
});


















 module.exports = app;
