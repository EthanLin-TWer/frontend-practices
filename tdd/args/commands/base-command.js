export class Command {
  constructor(flag) {
    const [, value = this.defaultValue] = flag.split(' ')
    this.value = value
  }

  get defaultValue() {
    throw new Error('SubClass responsibility')
  }
}
