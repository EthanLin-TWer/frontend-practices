import { Schema } from './schema'
import { NullSchema } from './schema/empty'

export class Schemas {
  constructor(schemas) {
    this.value = schemas.map((schema) => new Schema(schema))
  }

  findSchema(flagName) {
    return (
      this.value.find((schema) => {
        return schema.getAlias() === flagName
      }) || new NullSchema()
    )
  }
}
