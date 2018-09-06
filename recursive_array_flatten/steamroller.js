function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce((acc, el) => acc.concat((Array.isArray(el)) ? steamrollArray(el) : el), []) 
}

steamrollArray([1, [2], [3, [[4]]]]);