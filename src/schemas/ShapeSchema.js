export default class ShapeSchema {
  shape(schema) {
    this.schema = schema;
  }

  isValid(shape) {
    return Object.entries(shape ?? {}).every(([key, value]) => this.schema[key].isValid(value));
  }
}
