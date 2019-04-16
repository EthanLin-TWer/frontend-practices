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

  it('should parse multiple argument and use passed value when value is present', () => {
    const schema = new Schema('l:boolean p:number:8080 d:string:/usr/bin')
    const parser = new ArgsParser(schema)

    const args = parser.parse('-p 8000 -l -d /usr/local/bin')

    expect(args[0].getValue()).toEqual(true)
    expect(args[1].getValue()).toEqual(8000)
    expect(args[2].getValue()).toEqual('/usr/local/bin')
  })

  it('should throw error when argument list contains argument that can not be recognized by the schema', () => {
    const schema = new Schema('l:boolean')
    const parser = new ArgsParser(schema)

    expect(() => parser.parse('-w')).toThrowError('Not recognized option: -w')
  })
})
