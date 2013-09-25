var should = require('should');
var request = require('supertest');
var mysalary = require('../app');

describe('GET /', function(){
  it('should include \'[salary]\'', function(done){
    var app = mysalary();
    request(app).get('/').end(function(err, res) {
      res.text.should.include('[salary]');
      done();
    });
  });
  it('should include \'<title>mysalary</title>\'', function(done){
    var app = mysalary();
    request(app).get('/').end(function(err, res) {
      res.text.should.include('<title>mysalary</title>');
      done();
    });
  });
});

describe('GET /stylesheets/index.css', function(){
  it('should return 200 OK', function(done){
    var app = mysalary();
    request(app).get('/stylesheets/index.css').expect(200, done);
  });
  it('should include rule \'#mysalary\'', function(done){
    var app = mysalary();
    request(app).get('/stylesheets/index.css').end(function(err, res) {
      res.text.should.include('#mysalary');
      done();
    });
  });
});

describe('GET /javascripts/index.js', function(){
  it('should return 200 OK', function(done){
    var app = mysalary();
    request(app).get('/javascripts/index.js').expect(200, done);
  });
});

