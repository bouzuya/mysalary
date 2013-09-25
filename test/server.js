var assert = require('assert');
var request = require('supertest');
var app = require('../app');

describe('GET /', function(){
  it('should contain \'Hello, Express!\'', function(done){
    request(app()).get('/').expect('Hello, Express!', done);
  });
});

