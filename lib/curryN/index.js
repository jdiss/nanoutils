var placehold = require('../placehold')

module.exports = function curryN(n, fn) {
  return placehold(function() {
    return n - arguments.length > 0
      ? curryN(n - arguments.length, fn.bind.apply(fn, [fn].concat(arguments)))
      : fn.apply(fn, arguments)
  }, n)
}