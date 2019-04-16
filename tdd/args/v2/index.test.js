import { Schema } from './domains/schema'
import { ArgsParser } from './index'

describe('ArgsParser', () => {
  it('should ask schema for default value', () => {
    const schema = new Schema('l:boolean d:string:/usr/bin p:number:8080')
    const parser = new ArgsParser(schema)

    const args = parser.parse('-l')

    expect(args[0].getValue()).toEqual(true)
  })
})
