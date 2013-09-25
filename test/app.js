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

