export class Flag {
  constructor(name, value, defaultValue) {
    this._name = name
    this._value = value
    this._defaultValue = defaultValue
  }

  getName() {
    return this._name
  }

  getValue() {
    if (this._value) {
      return this._value
    }

    return this._defaultValue
  }
}
