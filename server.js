// server.js
var express = require('express'),
path = require('path'),
app = express(),
port = 3714;

// Make sure to include the JSX transpiler
// require("node-jsx").install();

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, './')));

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);