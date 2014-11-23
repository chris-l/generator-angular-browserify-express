/*jslint node: true, indent: 2, nomen: true, stupid:true */
/*global describe, it*/
'use strict';
var assert = require('assert');

describe('angular-browserify-express generator', function () {
  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
  });
});
