// implement curry()

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

// answer code here
function curry(fn) {
    return function curryInner(...args){
        if (args.length >= fn.length) {
            return fn(...args)
        }else {
            // return next function
            return (...args2) => {
                // closure curryInner
                return curryInner(...args, ...args2)
            }
        }
    }
}


const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3));  // '1_2_3'

console.log(curriedJoin(1)(2, 3));  // '1_2_3'

console.log(curriedJoin(1, 2)(3));  // '1_2_3'
