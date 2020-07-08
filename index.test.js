const funcs = require('./index');

test('shoud say hello to me', () => {
  expect(funcs.sayHelloTo('Me')).toBe('Hello, Me');
});