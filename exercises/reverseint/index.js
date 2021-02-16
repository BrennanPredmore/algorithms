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
  // ASSIGN VARIABLE REVERSED TO THE PLACEHOLDER
  const reversed = n
  // TURN THE PLACEHOLDER TO A STRING FROM AN INT
  .toString()
  // SPLIT THE STRING IN ARRAY
  .split('')
  // REVERSE THE CHARACTERS OF THE ARRAY
  .reverse()
  // JOIN THEM BACK TO TOGETHER BUT NOT IN REVERSE
  .join('');

  // THIS HANDLES FOR NEGATIVE INSTANCES
  if (n < 0) {
    // PARSEINT TURNS THE STRING INTO AN INT
    // WE TAKE ANY CASE LESS THAT ZERO 
    // AND MULTIPLE IT BY -1 TO AUTOMATICALLY CHANGE IT TO A NEGATIVE
    return parseInt(reversed) * -1;
  }
// ALL OTHER CASES (MORE THAN ZERO) WILL RETURN A PARSEINT POSITIVE REVERSED NUMBER!
  return parseInt(reversed);
}

module.exports = reverseInt;
