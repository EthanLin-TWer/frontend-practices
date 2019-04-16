import { Flag } from './domains/flag'

export class Schema {
  constructor() {}

  getFlags() {
    return [
      new Flag('l', 'boolean', false),
      new Flag('p', 'number', 0),
      new Flag('d', 'string', ''),
    ]
  }
}
