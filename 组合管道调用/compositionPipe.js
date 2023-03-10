// Building-blocks to use for composition
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
// answer
function pipe(...fns) {
    return (num) => {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, num)
    }
}

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
console.log(multiply6(6));   // 36
console.log(multiply9(9) );   // 81
console.log(multiply16(16) ); // 256
console.log(multiply24(10));  // 240