import { Schema } from './index'

describe('Schema', () => {
  it('should parse 3 flags when schema provides 3 flags delimited with spaces', () => {
    const schema = new Schema('l:boolean d:string p:number')

    expect(schema.getFlags().length).toEqual(3)
  })

  it('should parse type and name of an flag', () => {
    const schema = new Schema('l:boolean')
    const [first] = schema.getFlags()

    expect(first.getType()).toEqual('boolean')
    expect(first.getDefaultValue()).toEqual(false)
  })

  it('should be able to parse multiple flags', () => {
    const schema = new Schema('l:boolean p:number d:string')
    const [first, second, third] = schema.getFlags()

    expect(first.getType()).toEqual('boolean')
    expect(second.getType()).toEqual('number')
    expect(third.getType()).toEqual('string')
  })
})
