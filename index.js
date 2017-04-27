var app = require('express')();
var srv = require('http').createServer(app);
var bodyParser = require('body-parser');

app.get('/', function (req, res, next) {
  res.send('Hello world');
});

srv.listen(3000, function () {
  console.log('Listening on 3000');
});
