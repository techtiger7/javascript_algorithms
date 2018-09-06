const factorial = (num) => (num < 0) ? -1 : (num == 0) ? 1 : (num == 1) ? 1 : num * factorial(num - 1)
const binomialCoefficient = (n, k) =>  (n < k) ? console.log("n must be >= k") : (k < 0) ? console.log("k must be >= 0") : (factorial(n)) / (factorial(k) * factorial(n - k))

const pascalRow = function (rows) {
  if (rows < 1) {
    console.log("must enter at least 1 row")
  }
  result = []
  currentRow = 0
  while ((rows > 1) && (currentRow <= rows)){
    result = [...result, binomialCoefficient(rows, currentRow)]
    currentRow += 1
  }
  return result
} 

