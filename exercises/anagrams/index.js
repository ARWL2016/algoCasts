// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  let arrB = stringB.replace(/[^\w]/g, '').toLowerCase().split('');

  for (let char of stringA) {
    let ind = arrB.indexOf(char);
    if (ind === -1) {
      return false;
    } else {
      arrB.splice(ind, 1);
    }
  }

  if (arrB.length > 0) {
    return false;
  }
  return true;
}

console.log(anagrams('RAIL SAFETY!', 'fairy tales'));

module.exports = anagrams;
