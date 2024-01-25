// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', function(req, res) {
  	res.send('<h1>Hello World!</h1>');
});

// GREETINGS
app.get('/greeting/:name', function(req, res) {
    res.send(`<h1>Greetings, ${req.params.name}!<h1>`)
})

//TIP CALCULATOR
app.get('/tip/:total/:tipPercentage', function(req, res) {
    const tip = (req.params.tipPercentage / 100) * req.params.total;
    res.send(`<h1>Tip Calculator: your tip will be ${tip} </h1>`)
})

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});