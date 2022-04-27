import BaseValidator from './BaseValidator.js';

export default class ArrayValidator extends BaseValidator {
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
