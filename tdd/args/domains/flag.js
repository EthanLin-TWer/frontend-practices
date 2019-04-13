export class Flag {
  constructor(flag) {
    const [name, value] = flag.split(' ')
    this.name = name
    this.value = value
  }
}
