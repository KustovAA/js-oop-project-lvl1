import BaseSchema from './BaseSchema.js';

export default class StringSchema extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => value == null || typeof value === 'string'];
  }

  required() {
    return this.addRule((value) => value !== '' && value != null);
  }

  contains(substring) {
    return this.addRule((value) => value.includes(substring));
  }
}
