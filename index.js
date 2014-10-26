/*!
 * expand-braces <https://github.com/jonschlinkert/expand-braces>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var braces = require('braces');
var uniq = require('array-uniq');

module.exports = function expand(val, fn) {
  val = Array.isArray(val) ? val : [val];
  var len = val.length;
  var arr = [];
  var i = 0;

  while (i < len) {
    arr = arr.concat(braces(val[i++], fn));
  }
  return uniq(arr);
};
