import { Schema } from './domains/schema'
import { ArgsParser } from './index'

describe('ArgsParser', () => {
  it("should parse one argument and ask schema for its' default value", () => {
    const schema = new Schema('l:boolean')
    const parser = new ArgsParser(schema)

    const args = parser.parse('')

    expect(args[0].getValue()).toEqual(false)
  })

  it.skip("should parse one argument and ask schema for its' default value", () => {
    const schema = new Schema('l:boolean d:string:/usr/bin p:number:8080')
    const parser = new ArgsParser(schema)

    const args = parser.parse('')

    expect(args[0].getValue()).toEqual(false)
  })
})
