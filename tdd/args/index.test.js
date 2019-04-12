import { CommandLine } from './index'

it('should be able to parse a flag with value defaults to true', () => {
  const result = new CommandLine('-l').parse()

  expect(result).toEqual({ log: true })
})

it('should be able to parse a flag with boolean value provided', () => {
  const result = new CommandLine('-l').parse('-l')

  expect(result).toEqual({ log: true })
})
