// FreeCodeCamp Title Case function


// My solution

function titleCase(str) {
  var stringArray = str.split(" ");
  var result = [];
  for (let i = 0; i < stringArray.length; i++) {
    result.push(stringArray[i][0].toUpperCase().concat(stringArray[i].slice(1, stringArray[i].length).toLowerCase()));
  }
  return result.join(" ");
}

titleCase("I'm a little tea pot");

/* Better solution

This uses RegExp to find:

^ = beginning of input
| = OR
\s = a single whitespace character

Proceeded by:

\S = a single character other than a whitespace character.

It then passes a function to replace the found single characters with UpperCase versions

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

*/
