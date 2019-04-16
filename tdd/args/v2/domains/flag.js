export class Flag {
  constructor(name, type, defaultValue) {
    this.name = name
    this.type = type
    this.defaultValue = defaultValue
  }

  getName() {
    return this.name
  }

  getType() {
    return this.type
  }

  getDefaultValue() {
    return this.defaultValue
  }
}
