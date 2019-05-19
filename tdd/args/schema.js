export class Schema {
  #flagName
  #type
  #value

  constructor(flagName, value, type = 'number') {
    this.#flagName = flagName
    this.#type = type
    this.#value = value
  }

  get type() {
    return this.#type
  }

  get name() {
    return this.#flagName
  }

  get value() {
    return this.#value
  }
}
