// STRUCTURE OF APPLICATION
// Require modules
const express = require('express');
const fs = require('fs')

// Create the Express app
const app = express();
app.engine('madeline', (filePath, options, callback) => {
    if (err) return callback(err)

    const rendered - content.toString().replace('#title#', '<title>' + options.title + <title>'</title>)
})

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', function(req, res) {
  	res.send('<h1>Hello Express TWO!</h1>');
});

app.get('/home', (req, res)  => {
    res.send('<h1>Home Page</h1>');
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});