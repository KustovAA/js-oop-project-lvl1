import {
  ArraySchema, NumberSchema, StringSchema, ShapeSchema,
} from './schemas/index.js';

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
    return new StringSchema(this.customRules.string);
  }

  number() {
    return new NumberSchema(this.customRules.number);
  }

  array() {
    return new ArraySchema(this.customRules.array);
  }

  object() {
    return new ShapeSchema(this.customRules.object);
  }
}
