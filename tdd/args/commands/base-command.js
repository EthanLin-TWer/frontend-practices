export class Command {
  constructor(flag) {
    const [, value] = flag.split(' ')
    this.value = value || this.defaultValue
  }

  get defaultValue() {
    throw new Error('SubClass responsibility')
  }
}
