const express = require('express');
const app = express();
const fruits = require('./models/fruits.js')

app.set('view engine', 'jsx');
app.engine('jsx', require ('express-react-views').createEngine());

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});

app.listen(3000, () => {
    console.log('listening');
});