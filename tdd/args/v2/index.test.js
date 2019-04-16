import { Schema } from './index'

describe('Schema', () => {
  it('should parse types of an flag', () => {
    const schema = new Schema('l:boolean')

    expect(schema.getType()).toEqual('boolean')
    expect(schema.getDefaultValue()).toEqual(false)
  })
})
