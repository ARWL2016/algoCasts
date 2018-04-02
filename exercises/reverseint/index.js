// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let rev = n.toString().split('').reverse();

  if (rev[rev.length - 1] === '-') {
    rev.pop(); 
    rev.unshift('-');
  }

  return +rev.join('');
}

reverseInt(-15);

module.exports = reverseInt;
