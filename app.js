const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny')); // 'combined' would be more information
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { list: ['apple', 'banana', 'orange'], title: 'Hello World!' });
});

/*
    For powershell
    $env:DEBUG = "app"
    node app.js
*/

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
