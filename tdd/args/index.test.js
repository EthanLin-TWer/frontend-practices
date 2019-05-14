import { ArgsParser } from './args-parser'
import { Schemas } from './schemas'

it('overall test', () => {
  const schemas = new Schemas('p:*:8080,d:#:/usr/bin')
  const args = new ArgsParser(schemas).parse('-p 8080')

  expect(args.getValue('p')).toEqual(8080)
})
