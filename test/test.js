/* global describe, it */
'use strict';
import {expect} from 'chai';
import shortenCssHex from '../lib/';

describe('shorten-css-hex', () => {
  it('should throw a TypeError when hex is not passed', () => {
    function test() {
      shortenCssHex();
    }

    expect(test).to.throw(TypeError, /Expected a string/);
  });

  it('should throw a TypeError when hex is undefined', () => {
    function test() {
      shortenCssHex(undefined);
    }

    expect(test).to.throw(TypeError, /Expected a string/);
  });

  it('should throw a TypeError when hex is an object', () => {
    function test() {
      shortenCssHex({});
    }

    expect(test).to.throw(TypeError, /Expected a string/);
  });

  it('should throw a TypeError when hex is an array', () => {
    function test() {
      shortenCssHex([]);
    }

    expect(test).to.throw(TypeError, /Expected a string/);
  });

  it('should throw a TypeError when hex is a number', () => {
    function test() {
      shortenCssHex(1);
    }

    expect(test).to.throw(TypeError, /Expected a string/);
  });

  it('should throw error if hex does not have a hash', () => {
    function test() {
      shortenCssHex('12345');
    }

    expect(test).to.throw(Error, /Expected a string with 3 or 6 hex characters and a # prefix/);
  });

  it('should throw error if hex does not have 3 or 6 characters with a hash prefix', () => {
    function fiveCharacterTest() {
      shortenCssHex('#12345');
    }

    expect(fiveCharacterTest).to.throw(Error, /Expected a string with 3 or 6 hex characters and a # prefix/);

    function threeCharacterTest() {
      shortenCssHex('#123');
    }

    expect(threeCharacterTest).to.not.throw(Error);

    function sixCharacterTest() {
      shortenCssHex('#123456');
    }

    expect(sixCharacterTest).to.not.throw(Error);
  });

  it('should return original hex if cannot be shortened', () => {
    expect(shortenCssHex('#123456')).to.eql('#123456');
    expect(shortenCssHex('#aBcDeF')).to.eql('#aBcDeF');
  });

  it('should return shortened hex if can be shortened', () => {
    expect(shortenCssHex('#000000')).to.eql('#000');
    expect(shortenCssHex('#AABBCC')).to.eql('#abc');
  });
});
