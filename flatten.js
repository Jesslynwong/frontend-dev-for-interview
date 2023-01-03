const arr = [1, [2], [3, [4]]];

// answer code
function flat(arr, depth = 1) {
    if (depth === 0) return arr
    const array = arr.reduce((acc, item) => {
        // concat return a new array
        // must return a new object, therefore, it cannot use `push`
        acc = acc.concat( Array.isArray(item)?flat(item, depth - 1): item)
        return acc
    }, [])
    return array
  }

console.log(flat(arr));
// [1, 2, 3, [4]]

console.log(flat(arr, 1)); 
// [1, 2, 3, [4]]

console.log(flat(arr, 2)); 
// [1, 2, 3, 4]
