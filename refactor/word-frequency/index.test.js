import { getResult } from './index'

it.skip('should get "the 1" when input "the"', () => {
  const input = 'the'
  const output = 'the 1'

  validate_Input_words_process_to_expected_word(input, output)
})

it.skip('should process two words', () => {
  const input = 'the is'
  const output = 'the 1\nis 1'

  validate_Input_words_process_to_expected_word(input, output)
})

it.skip('should process two words with special spaces', () => {
  const input = 'the      is'
  const output = 'the 1\nis 1'

  validate_Input_words_process_to_expected_word(input, output)
})

it.skip('should pracess two same words with sorted', () => {
  const input = 'the the is'
  const output = 'the 2\nis 1'

  validate_Input_words_process_to_expected_word(input, output)
})

it.skip('should process sorted with count descending', () => {
  const input = 'the is is'
  const output = 'is 2\nthe 1'

  validate_Input_words_process_to_expected_word(input, output)
})

it.skip('should process two same words with sorted', () => {
  const input = 'the the is'
  const output = 'the 2\nis 1'

  validate_Input_words_process_to_expected_word(input, output)
})

const validate_Input_words_process_to_expected_word = (input, output) => {
  // When
  const result = getResult(input)
  // Then
  expect(result).toBe(output)
}
