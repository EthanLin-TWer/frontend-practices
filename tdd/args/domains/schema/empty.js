import { Schema } from '../schema'

export class NullSchema extends Schema {
  constructor() {
    super({
      alias: '',
      type: '',
      defaultValue: null,
    })
  }
}
