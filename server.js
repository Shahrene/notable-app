const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 3000;

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.get('/notes', (req, res) => {
  request(options, function(err, omdbRes, data) {
  res.render('details', {text: req.body.body, title: req.body.title, date: req.body.date})
})

app.use(bodyParser.urlencoded({ extended:true }))

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);
    app.listen(port,() => {
      console.log('running on port 3000');
    });
  });
