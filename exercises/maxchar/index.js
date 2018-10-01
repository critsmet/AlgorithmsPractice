// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {}
  let maxChar = ''
  let max = 0

  for (let char of str){
    obj[char] = obj[char]++ || 1
  }

  for (let char in obj){
    if (obj[char] > max){
      maxChar = char
      max = obj[char]
    }
  }
  return maxChar
}

module.exports = maxChar;
