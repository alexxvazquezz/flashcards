const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const name = req.cookies.username;
  if(name) res.render('index', { name });
  else res.redirect('/hello');

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
  const name = req.cookies.username
  if(name) res.redirect('/');
  else res.render('hello', { name });
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username)
  res.redirect('/');
})

app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
})


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
