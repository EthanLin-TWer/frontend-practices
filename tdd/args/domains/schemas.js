import { Schema } from './schema'

export class Schemas {
  constructor(schemas) {
    this.value = schemas.map((schema) => new Schema(schema))
  }

  findSchema(flag) {
    return this.value.find((schema) => {
      return schema.getAlias() === flag.getName()
    })
  }
}
