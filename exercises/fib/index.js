// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

  let fibArray = []

  for(let i = 0; i <=n; i++){
    isNaN(fibArray[i - 2]) ? fibArray[i] = i : fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
  }

  return fibArray[n]

}

module.exports = fib;
