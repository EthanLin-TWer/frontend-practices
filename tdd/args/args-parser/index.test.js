import { Schema } from '../schema'
import { ArgsParser } from './index'

it('acceptance tests', () => {
  const schemas = [new Schema('p', 8080)]
  const argumentList = '-p 8080'

  const parser = new ArgsParser(schemas)
  const args = parser.parse(argumentList)

  expect(args.get('p')).toEqual(8080)
})
