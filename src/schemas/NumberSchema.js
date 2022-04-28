import BaseSchema from './BaseSchema.js';

export default class NumberSchema extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => value == null || typeof value === 'number'];
  }

  required() {
    return this.addRule((value) => value != null);
  }

  positive() {
    return this.addRule((value) => value == null || value > 0);
  }

  range(start, end) {
    return this.addRule((value) => value >= start && value <= end);
  }
}
