// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false; // if no alphabet, return false
    if (alphabet.length !== 26) return false; // if length is not 26, return false
    if(Array.from(new Set(alphabet)).length !== 26) return false // Array.from() will convert "new Set" to an array, the "Set" method will determine that, and if it's not = to 26, it will be false. 
    let abc = "abcdefghijklmnopqrstuvwxyz"
    alphabet = alphabet.split('') // split the alphabet
    input = input.toLowerCase() 
    
    let encoding = {}
    let decoding = {}
    let result = ''
    abc.split('').forEach((letter, index) => {   
      encoding[letter] = alphabet[index] // generate encode object
      decoding[alphabet[index]] = letter // generate decode object
    })
    if (!encode) encoding = decoding 
    input.split('').forEach(input =>{
      result += input === ' ' ? ' ' : encoding[input] // if theres a space return the space, otherwise return encode input
    })
    return result
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };