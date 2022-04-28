import BaseSchema from './BaseSchema.js';

export default class ArraySchema extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => value == null || Array.isArray(value)];
  }

  required() {
    return this.addRule((value) => value != null);
  }

  sizeof(length) {
    return this.addRule((value) => value.length === length);
  }
}
