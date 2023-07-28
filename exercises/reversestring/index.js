// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reverseArray = []
    let newString = ""
    for(let i=str.length-1; i>=0; i--){
        reverseArray.push(str[i])
        newString = reverseArray.join("").toString()
    }
    return newString;
}

module.exports = reverse;

//OTHER WAYS TO DO THIS
    //Turn str into an array --> return str.split('').reverse().join('')
    //Can call reverse method on it
    //Call join method

// FOR LOOP 
    // let reversed = ''
    // for(let char of str){
    //     reversed = char+ reversed
    // }
    // return reversed
    // }

// ARROW FUNCTIONS AND REDUCED METHOD
    // return str.split('').reduce((reversed, character)=>{
    // return character + reversed;
    // }, '');
