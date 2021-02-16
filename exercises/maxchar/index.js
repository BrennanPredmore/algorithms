// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    // THIS "FOR OF" LOOP, LOOPS THROUGH A STRING AND CREATES AN OBJECT OF THE CHARMAP
    for (let char of str){
        if(charMap[char]){
            charMap[char]++
        }else {
            charMap[char] = 1
        }
    }
   
    // THIS "FOR IN" LOOP, LOOPS THROUGH N OBJECT
    for (let char in charMap){
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar;
