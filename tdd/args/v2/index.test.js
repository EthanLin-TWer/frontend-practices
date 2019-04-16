import { Schema } from './domains/schema'
import { ArgsParser } from './index'

describe('ArgsParser', () => {
  it("should parse one argument and ask schema for its' default value", () => {
    const schema = new Schema('l:boolean')
    const parser = new ArgsParser(schema)

    const args = parser.parse('')

    expect(args[0].getValue()).toEqual(false)
  })

  it("should parse multiple argument and ask schema for its' default value when argument list is empty", () => {
    const schema = new Schema('l:boolean p:number:8080')
    const parser = new ArgsParser(schema)

    const args = parser.parse('')

    expect(args[0].getValue()).toEqual(false)
    expect(args[1].getValue()).toEqual(8080)
  })

  it('should parse one argument and use passed value when value is present', () => {
    const schema = new Schema('l:boolean p:number:8080')
    const parser = new ArgsParser(schema)

    const args = parser.parse('-p 8000')

    expect(args[0].getValue()).toEqual(false)
    expect(args[1].getValue()).toEqual(8000)
  })
})
