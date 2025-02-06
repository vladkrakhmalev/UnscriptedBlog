import { clss } from "./clss"

describe('clss', () => {
  test('without classes', () => {
    expect(clss('')).toBe('')
  })

  test('with one class', () => {
    expect(clss('a')).toBe('a')
  })

  test('with three classes', () => {
    expect(clss('a', 'b', 'c')).toBe('a b c')
  })

  test('with true object', () => {
    expect(clss('a', { b: true }, { c: true }, 'd')).toBe('a b c d')
  })

  test('with false object', () => {
    expect(clss('a', { b: false }, { c: true }, 'd')).toBe('a c d')
  })

  test('with undefined object', () => {
    expect(clss('a', { b: true }, { c: undefined }, 'd')).toBe('a b d')
  })
})