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

// MAGIC 8 BALL
app.get('/magic/:question', function (req, res) {
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const answer = responses[Math.floor(Math.random() * 19)]
    const query = req.params.question
    res.send(`<h1> Q: ${query}? A: ${answer}</h1>`)
})

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});