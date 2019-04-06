function findAllPossibleTwoWordsCombination() {
  return []
}

export function isAnagramToWordDocument(words) {
  return words.every((word) =>
    Array.from(word).every((character) => 'document'.includes(character))
  )
}

export const anagrams = () => {
  const combinations = findAllPossibleTwoWordsCombination()
  return combinations.filter(isAnagramToWordDocument)
}
