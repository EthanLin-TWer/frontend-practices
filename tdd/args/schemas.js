import { asArray } from './utils'

export class Schemas {
  #schemas
  constructor(schemas) {
    this.#schemas = asArray(schemas)
  }

  findSchema(name) {
    return this.#schemas.find((schema) => schema.name === name)
  }
}
