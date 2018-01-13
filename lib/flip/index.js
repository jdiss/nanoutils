var argsToArray = require('../argsToArray')

module.exports = function flip(fn) {
  return function() {
    return fn.apply(fn, argsToArray(arguments).reverse())
  }
}