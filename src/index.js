'use strict';

/**
 * Shorten 6 character hexes to 3 characters
 * @param {String} hex - hex to shorten
 * @throws {TypeError} - hex is not a string
 * @return {String} - shortened hex
 */
export default function shortenCssHex(hex) {
  let lowerHex;

  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (hex[0] !== '#' || hex.length !== 4 && hex.length !== 7) {
    throw new Error('Expected a string with 3 or 6 hex characters and a # prefix');
  }

  lowerHex = hex.toLowerCase();

  // three matching character pairs?
  if (lowerHex[1] === lowerHex[2] && lowerHex[3] === lowerHex[4] && lowerHex[5] === lowerHex[6]) {
    return '#' + lowerHex[1] + lowerHex[3] + lowerHex[5];
  }

  return hex;
}
