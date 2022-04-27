export default class BaseValidator {
  constructor(customRules = {}) {
    this.rules = [];
    this.customRules = customRules;
  }

  isValid(value) {
    return this.rules.every((rule) => rule(value));
  }

  addRule(rule) {
    this.rules.push(rule);
    return this;
  }

  test(ruleName, ...args) {
    return this.addRule((value) => this.customRules[ruleName](value, ...args));
  }

  addCustomRule(ruleName, fn) {
    this.customRules[ruleName] = fn;
  }
}
