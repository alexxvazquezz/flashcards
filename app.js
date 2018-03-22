const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello whatup DOG I love you');
});

app.listen(3000);
