'use strict';

/**
 * Shorten 6 character hexes to 3 characters
 * @param {String} hex - hex to shorten
 * @throws {TypeError} - hex is not a string
 * @return {String} - shortened hex
 */
export default function shortenCssHex(hex) {
  let hasHex, lowerHex;

  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string');
  }

  hasHex = hex[0] === '#';

  // is valid 6 character hex with an optional hash prefix
  if (hasHex && hex.length !== 7 || !hasHex && hex.length !== 6) {
    return hex;
  }

  lowerHex = hex.replace('#', '').toLowerCase();

  // three matching character pairs?
  if (lowerHex[0] === lowerHex[1] && lowerHex[2] === lowerHex[3] && lowerHex[4] === lowerHex[5]) {
    return (hasHex ? '#' : '') + lowerHex[0] + lowerHex[2] + lowerHex[4];
  }

  return hex;
}
