import { Schema } from './index'

describe('Schema', () => {
  it('should parse 3 flags when schema provides 3 flags delimited with spaces', () => {
    const schema = new Schema('l:boolean d:string p:number')

    expect(schema.getFlags().length).toEqual(3)
  })

  it('should parse types of an flag', () => {
    const schema = new Schema('l:boolean')

    expect(schema.getType()).toEqual('boolean')
    expect(schema.getDefaultValue()).toEqual(false)
  })
})
