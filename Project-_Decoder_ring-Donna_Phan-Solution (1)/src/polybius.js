// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope 

 const encoded = { 
  'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 
  'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55',[' ']: " " 
 };

  // object to use when encoding including empty spaces

 const decoded = { 
   '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', '23': 'm', '33': 'n', 
   '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z',[' ']: " " 
 };
  
  // object to use when decoding including empty spaces
  
  
// bad ==> 211141
// cab ==> 311121

// bad ==> ["b", "a", "d"]
// array ==> ?? ==> ["21", "11", "41"]
// array.map((ltr) => {
//  return encoding[ltr]
// })

  
  function polybius(input, encode = true) {
    if (encode){
      return input.split('').map(ltr => { // split then map each letter 
        return encoded[ltr.toLowerCase()] 
      }).join('') 
    } else {
    if (input.replace(/\s/g,'').length % 2 !==0) return false // remove space and return false if uneven
       return input.match(/[0-9]{2}|\s/g).map(number => { // input can be a number from 0-9 and there is two numbers or a space
       return decoded[number]
    }).join('') 
  }
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
