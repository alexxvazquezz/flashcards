const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/cards', (req, res) => {
  res.render('cards',
    { prompt: "Who is buried in Grant's tumb?",
        hint: "Think about who's in the tumb..."
    })
})

app.get('/usertable', (req, res) => {
  res.render('table');
})

app.get('/hello', (req, res) => {
  res.render('hello');
})

app.post('/hello', (req, res) => {
  res.render('hello');
})


app.listen(3000, () => {
  console.log('The application is runing on localhost:3000');
})
