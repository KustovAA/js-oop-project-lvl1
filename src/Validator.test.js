import Validator from './Validator.js';

test('string schema', () => {
  const v = new Validator();
  const schema = v.string();

  expect(schema.isValid('')).toBe(true);
  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(undefined)).toBe(true);
  expect(schema.isValid('')).toBe(true);

  schema.required();

  expect(schema.isValid('what does the fox say')).toBe(true);
  expect(schema.isValid('hexlet')).toBe(true);
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid('')).toBe(false);

  expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
  expect(schema.contains('whatthe').isValid('what does the fox say')).toBe(false);
  expect(schema.isValid('what does the fox say')).toBe(false);
});

test('number schema', () => {
  const v = new Validator();
  const schema = v.number();

  expect(schema.isValid(null)).toBe(true); // true

  schema.required();

  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid(7)).toBe(true);

  expect(schema.positive().isValid(10)).toBe(true);
  schema.range(-5, 5);

  expect(schema.isValid(-3)).toBe(false);
  expect(schema.isValid(5)).toBe(true);
});

test('array schema', () => {
  const v = new Validator();

  const schema = v.array();

  expect(schema.isValid(null)).toBe(true);

  schema.required();

  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid([])).toBe(true);
  expect(schema.isValid(['hexlet'])).toBe(true);

  schema.sizeof(2);

  expect(schema.isValid(['hexlet'])).toBe(false);
  expect(schema.isValid(['hexlet', 'code-basics'])).toBe(true);
});

test('shape schema', () => {
  const v = new Validator();

  const schema = v.object();

  schema.shape({
    name: v.string().required(),
    age: v.number().positive(),
  });

  expect(schema.isValid({ name: 'kolya', age: 100 })).toBe(true);
  expect(schema.isValid({ name: 'maya', age: null })).toBe(true);
  expect(schema.isValid({ name: '', age: null })).toBe(false);
  expect(schema.isValid({ name: 'ada', age: -5 })).toBe(false);
});

test('custom validators', () => {
  const v = new Validator();

  let fn = (value, start) => value.startsWith(start);
  v.addValidator('string', 'startWith', fn);

  let schema = v.string().test('startWith', 'H');

  expect(schema.isValid('exlet')).toBe(false);
  expect(schema.isValid('Hexlet')).toBe(true);

  fn = (value, min) => value >= min;
  v.addValidator('number', 'min', fn);

  schema = v.number().test('min', 5);
  expect(schema.isValid(4)).toBe(false);
  expect(schema.isValid(6)).toBe(true);
});
