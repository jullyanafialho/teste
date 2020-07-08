const funcs = require('./index');

test('shoud say hello to me', () => {
  expect(funcs.sayHelloTo('Mee')).toBe('Hello, Mee');
});