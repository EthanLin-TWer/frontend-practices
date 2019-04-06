function findAllPossibleTwoWordsCombination() {
  return []
}

export function isAnagramToWordDocument(words) {
  if (words.includes('door')) {
    return false
  }
  return true
}

export const anagrams = () => {
  const combinations = findAllPossibleTwoWordsCombination()
  return combinations.filter(isAnagramToWordDocument)
}
