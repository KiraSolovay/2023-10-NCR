// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Mount middleware (app.use)
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
  })

// Mount routes (INDUCES)
app.get('/', function(req, res) {
    const htmlContent = `
    <h1>99 Bottles of Beer on the Wall...</h1>
    <a href="./98">Take One Down and Pass it Around!<a/>`;
    res.send(htmlContent);
});

app.get('/0', function (req, res) {
    const htmlContent = `
    <h1>0 Bottles of Beer on the Wall...</h1>
    <a href="./">Gather Up the 99 Bottles!<a/>`;
    res.send(htmlContent);
});

app.get('/:bottles', function (req, res) {
    const nextBottle= req.params.bottles - 1
    const htmlContent= `<h1> ${req.params.bottles} Bottles of Beer on the Wall... </h1> <a href="./${nextBottle}">Take One Down and Pass it Around!</a> `
    res.send(htmlContent)
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});