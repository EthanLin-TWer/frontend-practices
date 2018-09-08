import { main } from './index'

describe('main()', () => {
  it('should return 910', () => {
    // prettier-ignore
    expect(main('910')).toBe(
      '._. ... ._.' + '\n' +
      '|_| ..| |.|' + '\n' +
      '..| ..| |_|' + '\n'
    )
  })

  it('should return 256', () => {
    // prettier-ignore
    expect(main('256')).toBe(
      '._. ._. ._.' + '\n' +
      '._| |_. |_.' + '\n' +
      '|_. ._| |_|' + '\n'
    )
  })

  it('should return 7', () => {
    // prettier-ignore
    expect(main('7')).toBe(
      '._.' + '\n' +
      '..|' + '\n' +
      '..|' + '\n'
    )
  })
})
