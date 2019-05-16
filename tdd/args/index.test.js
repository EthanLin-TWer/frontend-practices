import { ArgsParser } from './args-parser'
import { Schema } from './schema'

it('overall test', () => {
  const schemas = new Schema('p:*:8080,d:#:/usr/bin')
  const args = new ArgsParser(schemas).parse('-p 8080')

  expect(args.getValue('p')).toEqual(8080)
})
