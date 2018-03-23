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

app.listen(3000, () => {
  console.log('The application is runing on localhost:3000');
})
