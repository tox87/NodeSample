/**
 * Created by Tox on 18.10.2014.
 * Description: Ridiculous tests
 */

var should = require('should');
var assert = require('assert');

describe('Test Framework', function () {
    it('should have mocha installed and running', function () {
        assert.equal(true, true);
    });
    it('should gave the should library installed and running for fluent testing', function () {
        true.should.eql(true);
    })
});