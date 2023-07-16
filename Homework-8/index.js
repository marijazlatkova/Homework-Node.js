//! Homework
//* 1. test-hw -> change html files with ejs
//* 2. Make the configuration in index.js -> app.set -> for ejs to be able to work with your app
//* 3. res.render(analiza)
//* 4. res.render(analiza-form)

const express = require('express');
const path = require('path');
const ejs = require('ejs');

const { getAnalizator, postAnalizator } = require('./controllers/analizator-kontroler');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/analiza', getAnalizator);
app.post('/analiza', postAnalizator);

const porta = 8080;

app.listen(porta, (err) => {
  if (err) console.log('Nastana Greska');
  console.log(`Serverot e pusten na porta ${porta}`);
});