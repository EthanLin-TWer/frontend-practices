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
})
