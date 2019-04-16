import { Flag } from './index'

export class NullFlag extends Flag {
  constructor() {
    super('', null, null)
  }
}
