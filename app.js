const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello whatup DOG I love you</h1>');
})

app.get('/hello', (req, res) => {
  res.send('<h2>Hello motherfucker</h2>')
})

app.listen(3000, () => {
  console.log('The application is runing on localhost:3000');
})
