import { choose_no_repeat_number } from '../../practices/filter/choose_no_repeat_number'

describe('choose_no_repeat_number', function() {
  const collection = [1, 1, 1, 2, 2, 3, 4]

  it('从collection中选出不重复的数字', function() {
    const result = choose_no_repeat_number(collection)

    expect(result).toEqual([1, 2, 3, 4])
  })
})
