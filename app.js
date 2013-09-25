var express = require('express');

module.exports = createApplication;

function createApplication() {
  var app = express();
  app.get('/', function(req, res) {
    res.render('index.jade');
  });
  return app;
}

