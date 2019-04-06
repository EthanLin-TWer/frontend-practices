import { isAnagramToWordDocument } from './index'

describe('anagrams', () => {
  it('should return true when do and men are both anagrams of document', () => {
    expect(isAnagramToWordDocument(['do', 'men'])).toEqual(true)
  })

  it('should return false when door is not an anagram of document', () => {
    expect(isAnagramToWordDocument(['do', 'door'])).toEqual(false)
  })
})
