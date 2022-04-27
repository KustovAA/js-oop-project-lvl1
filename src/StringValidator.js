import BaseValidator from './BaseValidator.js';

export default class StringValidator extends BaseValidator {
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
