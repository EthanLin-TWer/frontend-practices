import { CommandLine } from './index'

it('should be able to parse a flag with value defaults to true', () => {
  const result = new CommandLine('-l').parse()

  expect(result).toEqual({ log: true })
})

it('should be able to parse port flag with value defaulted to 8080', () => {
  const result = new CommandLine('-p').parse()

  expect(result).toEqual({ port: 8080 })
})
