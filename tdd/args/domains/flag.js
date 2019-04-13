export class Flag {
  constructor(name, value) {
    this._name = name
    this.value = value
  }

  getName() {
    return this._name
  }
}
