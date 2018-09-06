
// FreeCodeCamp Missing Letters 

function fearNotLetter(str) {
  var firstCharCode = str.charCodeAt(0);
  var lastCharCode = str.charCodeAt(str.length - 1);
  if ((lastCharCode - firstCharCode) == (str.length)){
    for (let i = 0; i <= str.length; i++){
      if (str.charCodeAt(i) != str.charCodeAt(i + 1) - 1){
        return String.fromCharCode(firstCharCode + i + 1);
      }
    }
  }
  else {
    return undefined;
  }
}

fearNotLetter("abce");
