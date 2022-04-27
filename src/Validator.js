import ArrayValidator from './ArrayValidator.js';
import NumberValidator from './NumberValidator.js';
import ShapeValidator from './ShapeValidator.js';
import StringValidator from './StringValidator.js';

export default class Validator {
  constructor() {
    this.customRules = {};
  }

  addValidator(type, ruleName, fn) {
    if (!this.customRules[type]) {
      this.customRules[type] = {};
    }

    this.customRules[type][ruleName] = fn;
  }

  string() {
    return new StringValidator(this.customRules.string);
  }

  number() {
    return new NumberValidator(this.customRules.number);
  }

  array() {
    return new ArrayValidator(this.customRules.array);
  }

  object() {
    return new ShapeValidator(this.customRules.object);
  }
}
