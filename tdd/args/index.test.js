import { ArgsParser } from './index'

it('should parse command with one flag when flag does not have a value provided(should use default value)', () => {
  const schema = [{ alias: 'l', type: Boolean, defaultValue: false }]
  const result = new ArgsParser(schema).parse('-l')

  expect(result).toEqual({ l: false })
})
