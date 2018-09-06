// FreeCodeCamp Pig Latin


// Input: An English word string
// Output: Pig Latin conversion
// Pre-requisite: Input must be a word, English, and in Lower Case

function translatePigLatin(str) {
  var firstVowel = str.search(/[aeiou]/);
  if (firstVowel > 0){
    return str.slice(firstVowel) + str.slice(0, firstVowel) + 'ay';
  }
  else {
    return str + 'way';
  }
}

translatePigLatin("consonant");

switch (expression) {
  case expression:

    break;
  default:

}
