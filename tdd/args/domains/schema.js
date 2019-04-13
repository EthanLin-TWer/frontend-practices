export class Schema {
  constructor({ alias, type, defaultValue }) {
    this._alias = alias
    this._type = type
    this._defaultValue = defaultValue
  }

  getAlias() {
    return this._alias
  }

  getDefaultValue() {
    return this._defaultValue
  }
}
