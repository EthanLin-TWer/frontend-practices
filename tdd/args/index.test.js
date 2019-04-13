import { ArgsParser } from './index'

it('should parse one argument and use default value', () => {
  const schema = [{ alias: 'l', type: 'boolean', defaultValue: false }]

  const result = new ArgsParser(schema).parse('')

  expect(result.l).toEqual(false)
})

it('should parse one argument and use provided value', () => {
  const schema = [{ alias: 'l', type: 'boolean', defaultValue: false }]

  const result = new ArgsParser(schema).parse('-l')

  expect(result.l).toEqual(true)
})

it('should parse integer argument and use default value', () => {
  const schema = [{ alias: 'p', type: 'integer', defaultValue: 8080 }]

  const result = new ArgsParser(schema).parse('-p')

  expect(result.p).toEqual(8080)
})

it('should parse integer argument and use provided value', () => {
  const schema = [{ alias: 'p', type: 'integer', defaultValue: 8080 }]

  const result = new ArgsParser(schema).parse('-p 9000')

  expect(result.p).toEqual(9000)
})

it('should parse string argument and use provided value', () => {
  const schema = [{ alias: 'd', type: 'string', defaultValue: '/usr/bin' }]

  const result = new ArgsParser(schema).parse('-d /usr/local/bin')

  expect(result.d).toEqual('/usr/local/bin')
})

it('should throw error when args can not be recognized', () => {
  const schema = [{ alias: 'd', type: 'string', defaultValue: '/usr/bin' }]

  expect(() => new ArgsParser(schema).parse('-w oops')).toThrowError(
    'option -w can not be parsed.'
  )
})

it('should parse two boolean arguments with values default to false', () => {
  const schema = [
    { alias: 'l', type: 'boolean', defaultValue: false },
    { alias: 'r', type: 'boolean', defaultValue: false },
  ]

  const result = new ArgsParser(schema).parse('-l -r')

  expect(result.l).toEqual(true)
  expect(result.r).toEqual(true)
})

it('integration - this args parser should work like a charm', () => {
  const schema = [
    { alias: 'l', type: 'boolean', defaultValue: false },
    { alias: 'p', type: 'integer', defaultValue: 8080 },
    { alias: 'd', type: 'string', defaultValue: 'rm -rf /*' },
  ]

  const result = new ArgsParser(schema).parse('-l -p 9000')

  expect(result).toEqual({
    l: true,
    p: 9000,
    d: 'rm -rf /*',
  })
})
