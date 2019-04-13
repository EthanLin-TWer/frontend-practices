import { Schema } from './schema'

export class Schemas {
  constructor(schemas) {
    this.value = schemas.map((schema) => new Schema(schema))
  }

  findSchema(flagName) {
    return this.value.find((schema) => {
      return schema.getAlias() === flagName
    })
  }
}
