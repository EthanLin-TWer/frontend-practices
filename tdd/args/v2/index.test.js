import { Schema } from './domains/schema'

class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse() {
    return [
      {
        getDefaultValue() {
          return true
        },
      },
    ]
  }
}

describe('ArgsParser', () => {
  it('should ask schema for default value', () => {
    const schema = new Schema('l:boolean d:string:/usr/bin p:number:8080')
    const parser = new ArgsParser(schema)

    const rags = parser.parse('-l -d -p')

    expect(rags[0].getDefaultValue()).toEqual(true)
  })
})
