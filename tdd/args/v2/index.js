class Flag {
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

export class Schema {
  constructor() {}

  getFlags() {
    return [new Flag('l', 'boolean', false), 0, 0]
  }
}
