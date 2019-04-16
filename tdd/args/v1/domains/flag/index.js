export class Flag {
  constructor(name, value, defaultValue) {
    this._name = name
    this._value = value
    this._defaultValue = defaultValue
  }

  getName() {
    return this._name
  }

  format() {
    return this._value
  }

  getValue() {
    if (this._value) {
      return this.format()
    }

    return this._defaultValue
  }
}
