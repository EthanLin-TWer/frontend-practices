import { CommandLine } from './index'

it('should be able to parse a flag with value defaults to true', () => {
  const result = new CommandLine('-l').parse()

  expect(result).toEqual({ log: true })
})

it('should be able to parse port flag with value defaulted to 8080', () => {
  const result = new CommandLine('-p').parse()

  expect(result).toEqual({ port: 8080 })
})

it('should be able to parse port flag with value of number 8000', () => {
  const result = new CommandLine('-p 8000').parse()

  expect(result).toEqual({ port: 8000 })
})

it('should be able to parse directory flag with value provided to /usr/local/bin', () => {
  const result = new CommandLine('-d /usr/local/bin').parse()

  expect(result).toEqual({ directory: '/usr/local/bin' })
})

it('should be able to parse multiple args when each args with value provided', () => {
  const result = new CommandLine('-l -p 8000').parse()

  expect(result).toEqual({ log: true, port: 8000 })
})
