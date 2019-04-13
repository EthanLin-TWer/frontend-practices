import { ArgsParser } from './index'

it('should parse command with one flag when flag does not have a value provided(should use default value)', () => {
  const schema = [{ alias: 'l', type: Boolean, defaultValue: false }]

  const result = new ArgsParser(schema).parse('')

  expect(result.l).toEqual(false)
})

it('should parse command with one flag when flag value is provided', () => {
  const schema = [{ alias: 'l', type: Boolean, defaultValue: false }]

  const result = new ArgsParser(schema).parse('-l')

  expect(result.l).toEqual(true)
})