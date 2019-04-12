import { CommandLine } from './index'

let commandLine
beforeEach(() => {
  commandLine = new CommandLine()
})

it('should be able to parse a flag with value defaults to true', () => {
  const result = commandLine.parse('-l')

  expect(result).toEqual({ log: true })
})

it('should be able to parse a flag with boolean value provided', () => {
  const result = commandLine.parse('-l')

  expect(result).toEqual({ log: true })
})
