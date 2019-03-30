const add = (a,b) => a + b;

const generateGreeting = (name) => `Hello ${name}!`

test ('should return a greeting', () => {
  const name = 'Sam'
  const result = generateGreeting(name);
  expect(result).toBe('Hello Sam!')
})


test('should add two numbers', () => {
  const result = add(3,4);
  expect(result).toBe(7);

})
