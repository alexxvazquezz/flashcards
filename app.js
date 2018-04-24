const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const routes = require('./routes/index.js');
const cardRoutes = require('./routes/cards.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('view engine', 'pug');




app.use(routes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error')
})



app.listen(3000, () => {
  console.log('The application is runing on localhost:3000');
})
