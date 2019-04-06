import { isAnagramToWordDocument } from './index'

describe('anagrams', () => {
  it('should return true when do and men are both anagrams of document', () => {
    expect(isAnagramToWordDocument(['do', 'men'])).toEqual(true)
  })

  it('should return false when dir is not an anagram of document', () => {
    expect(isAnagramToWordDocument(['do', 'dir'])).toEqual(false)
  })

  it('should return false when the second word is not an anagram of document', () => {
    expect(isAnagramToWordDocument(['do', 'dior'])).toEqual(false)
  })

  it('should return false when the first word is not an anagram of document', () => {
    expect(isAnagramToWordDocument(['dior', 'do'])).toEqual(false)
  })

  it('should return false when the second word is not an anagram of document', () => {
    expect(isAnagramToWordDocument(['do', 'bot'])).toEqual(false)
  })
})
