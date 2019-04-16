export class Flag {
  constructor(name, type, defaultValue) {
    this.name = name
    this.type = type
    this.defaultValue = defaultValue
  }

  getType() {
    return this.type
  }

  getDefaultValue() {
    return this.defaultValue
  }
}
