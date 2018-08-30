import { choose_multiples_of_three } from '../../practices/filter/choose_multiples_of_three'

describe('choose_multiples_of_three', function() {
  const collection = [0, 1, 2, 3, 4, 5, 6, 9, 11]

  it.skip('从collection中选出3的倍数', function() {
    const result = choose_multiples_of_three(collection)

    expect(result).toEqual([0, 3, 6, 9])
  })
})
