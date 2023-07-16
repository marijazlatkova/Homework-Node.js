const express = require('express');
const path = require('path');

const { getAnalizator, postAnalizator } = require('./controllers/analizator-kontroler');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/analiza', getAnalizator);
app.post('/analiza', postAnalizator);

const porta = 8080;

app.listen(porta, (err) => {
  if (err) console.log('Nastana Greska');
  console.log(`Serverot e pusten na porta ${porta}`)
});