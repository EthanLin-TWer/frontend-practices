import { ArgsParser } from './args-parser'
import { Schemas } from './schemas'

it('should be able to parse a flag with value', () => {
  const schema = new Schemas()
  const command = '-p 9000'

  const args = new ArgsParser(schema).parse(command)

  expect(args.getValue('p')).toEqual(9000)
})

it('should be able to parse a flag and use default value from schema when value is not specified', () => {
  const schema = new Schemas('p', 8080)
  const command = '-p'

  const args = new ArgsParser(schema).parse(command)

  expect(args.getValue('p')).toEqual(9000)
})
