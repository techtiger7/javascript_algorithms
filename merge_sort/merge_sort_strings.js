
// Javascript Merge Sort for sentence of strings

// THIS IS BROKEN, NEED TO FIX

function findLongestWord(str) {
  var inputArray = str.split(" ");
  var workingArray = [];
  const arrayLength = inputArray.length;
  var width = 1; // Initialise the width to 1
  var leftIndex;
  var rightIndex;
  var lastIndex;
  while (width < arrayLength){
    leftIndex = 0; // Reset the start index to zero for the sort run
    while (leftIndex < arrayLength){
      rightIndex = Math.min(leftIndex + width, arrayLength);
      lastIndex = Math.min(leftIndex + 2 * width, arrayLength);
      for (let i = leftIndex; i < lastIndex; i++){
        if ((leftIndex < rightIndex) && ((rightIndex >= lastIndex) || (inputArray[rightIndex] <= inputArray[leftIndex]))){
          workingArray.push(inputArray[leftIndex]);
          leftIndex += 1;
        }
        else {
          workingArray.push(inputArray[rightIndex]);
          rightIndex += 1;
        }
      }
      leftIndex = leftIndex + 2 * width;
    }
    inputArray = workingArray;
    workingArray = [];
    width = width * 2;
  }
  return inputArray.join(" ");
}

findLongestWord("The quick brown fox jumped over the lazy dog");
