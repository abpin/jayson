var assert = require('assert');
var should = require('should');

var jayson = require(__dirname + '/..');
var utils = jayson.utils;

describe('The getParameterNames function', function() {
  it('should return an empty array when passed a parameter-less function', function() {
    var func = function() { return true; };
    var result = utils.getParameterNames(func);
    should.exist(result);
    result.should.be.instanceof(Array);
    result.should.have.length(func.length);
  });
  it('should return the correct names when passed a single-parameter function', function() {
    var func = function(a) { return a; };
    var result = utils.getParameterNames(func);
    should.exist(result);
    result.should.be.instanceof(Array);
    result.should.have.length(func.length);
    result.should.include('a');
  });
  it('should return the correct names when passed a simple function', function() {
    var func = function(a, b) { return a + b; };
    var result = utils.getParameterNames(func);
    should.exist(result);
    result.should.be.instanceof(Array);
    result.should.have.length(func.length);
    result.should.include('a', 'b');
  });
  it('should return the correct names when passed a function with complex parameters', function() {
    var func = function(_$foo, $$, FOO, $F00, _) { return false; };
    var result = utils.getParameterNames(func);
    should.exist(result);
    result.should.be.instanceof(Array);
    result.should.have.length(func.length);
    result.should.include('_$foo', '$$', 'FOO', '$F00', '_');
  });
});