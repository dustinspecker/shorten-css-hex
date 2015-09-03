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

  it('should return original hex if not 6 characters', () => {
    expect(shortenCssHex('1234567')).to.eql('1234567');
    expect(shortenCssHex('ABCDEFa')).to.eql('ABCDEFa');
  });

  it('should return original hex if not 6 characters with # prefix', () => {
    expect(shortenCssHex('#1234567')).to.eql('#1234567');
    expect(shortenCssHex('#ABCDEFa')).to.eql('#ABCDEFa');
  });

  it('should return original hex if cannot be shortened', () => {
    expect(shortenCssHex('#123456')).to.eql('#123456');
    expect(shortenCssHex('#aBcDeF')).to.eql('#aBcDeF');
    expect(shortenCssHex('123456')).to.eql('123456');
    expect(shortenCssHex('aBcDeF')).to.eql('aBcDeF');
  });

  it('should return shortened hex if can be shortened', () => {
    expect(shortenCssHex('000000')).to.eql('000');
    expect(shortenCssHex('AABBCC')).to.eql('abc');
    expect(shortenCssHex('#000000')).to.eql('#000');
    expect(shortenCssHex('#AABBCC')).to.eql('#abc');
  });
});
