/* global describe, it */
'use strict'
import {expect} from 'chai'
import shortenCssHex from '../lib/'

describe('shorten-css-hex', () => {
  it('should throw a TypeError when hex is not passed', () => {
    const test = () => shortenCssHex()
    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw a TypeError when hex is undefined', () => {
    const test = () => shortenCssHex(undefined)
    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw a TypeError when hex is an object', () => {
    const test = () => shortenCssHex({})
    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw a TypeError when hex is an array', () => {
    const test = () => shortenCssHex([])
    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw a TypeError when hex is a number', () => {
    const test = () => shortenCssHex(1)
    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw error if hex does not have a hash', () => {
    const test = () => shortenCssHex('12345')
    expect(test).to.throw(Error, /Expected a string with 3 or 6 hex characters and a # prefix/)
  })

  it('should throw error if hex does not have 3 or 6 characters with a hash prefix', () => {
    const fiveCharacterTest = () => shortenCssHex('#12345')
    expect(fiveCharacterTest).to.throw(Error, /Expected a string with 3 or 6 hex characters and a # prefix/)

    const threeCharacterTest = () => shortenCssHex('#123')
    expect(threeCharacterTest).to.not.throw(Error)

    const sixCharacterTest = () => shortenCssHex('#123456')
    expect(sixCharacterTest).to.not.throw(Error)
  })

  it('should throw error if hex contains non-hexadecimal characters', () => {
    const test = () => shortenCssHex('#QWERTY')
    expect(test).to.throw(Error, /Expected a string with 3 or 6 hex characters and a # prefix/)
  })

  it('should return original hex if cannot be shortened', () => {
    expect(shortenCssHex('#123456')).to.eql('#123456')
    expect(shortenCssHex('#aBcDeF')).to.eql('#aBcDeF')
  })

  it('should return shortened hex if can be shortened', () => {
    expect(shortenCssHex('#000000')).to.eql('#000')
    expect(shortenCssHex('#AABBCC')).to.eql('#abc')
  })
})
