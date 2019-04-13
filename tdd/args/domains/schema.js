export class Schema {
  get alias() {
    return this._alias
  }

  get type() {
    return this._type
  }

  get defaultValue() {
    return this._defaultValue
  }

  constructor({ alias, type, defaultValue }) {
    this._alias = alias
    this._type = type
    this._defaultValue = defaultValue
  }
}
