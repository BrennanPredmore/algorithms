// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // YOU WANT TO START AT 1 NOT ZERO BECAUSE THE INSTRUCTIONS SAY START AT ONE
  for (let i = 1; i <= n; i++) {
    // IS THE NUMBER A MULTIPLE OF 3 AND 5?
    // USE THE % (moduler operator) TO FIND THE REMAINDER OF THE NUMBER
    // (ex. 9 % 3 = 0) 3 goes into 9 an equal amount of times with no remainder

    // FIRST WE CHECK IF IT HAS BOTH MULTIPLES AT THE SAME TIME
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      // NEXT WE CHECK TO SEE IF IT IS JUST MULTIPLES OF 3
    } else if (i % 3 === 0) {
      console.log('fizz');
      // NEXT WE CHECK TO SEE IF IT IS JUST MULTIPLES OF 5
    } else if (i % 5 === 0) {
      console.log('buzz');
      // CONSOLE LOG THE NUMBER IF NONE OF THE REST
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
