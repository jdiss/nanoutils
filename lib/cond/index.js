const curry = require('../curry')

module.exports = curry(function cond(conds, data) {
  return conds.length
    ? conds[0][0](data) ? conds[0][1](data) : cond(conds.slice(1), data)
    : undefined
})