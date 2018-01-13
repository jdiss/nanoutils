var __ = require('./__')
var clone = require('./clone')

test("shouldn't clone function", () => {
  var a = function b() {}
  expect(clone(a)).toBe(a)
})

test("shouldn't clone placeholder", () => {
  var a = __
  expect(clone(a)).toBe(__)
})

test('should clone Date object', () => {
  var a = new Date()
  var b = clone(a)
  b.setHours(15)
  expect(b).not.toBe(a)
})

test('should clone RegExp', () => {
  var a = new RegExp()
  var b = clone(a)
  expect(clone(a)).not.toBe(a)
})

test('should clone Array with nested data', () => {
  var a = [1, 'hello', [null, 'lalka']]
  var b = clone(a)
  b[2][0] = 'mutated'
  expect(a[2][0]).toBeNull()
  b = b.map(i => 'mutated')
  expect(a.every(i => i !== 'mutated')).toBeTruthy()
})

test('should clone Object with nested data', () => {
  var a = { a: 1, b: { c: 1, d: [1, 2, 3] } }
  var cloneA = { a: 1, b: { c: 1, d: [1, 2, 3] } }
  var b = clone(a)
  b.a = 2
  b.b.c = 'asdf'
  b.b.d[1] = 4
  expect(a).toEqual(cloneA)
})