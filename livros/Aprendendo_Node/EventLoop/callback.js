function fib(n) {
    if (n < 2) {
        return n
    }
    
    return fib(n-1) + fib(n - 2)
}

class Obj {
    doSomething(arg1_) {
        const arg1   = typeof arg1_ == 'number' ? arg1_ : null
        let callback = arguments[arguments.length - 1]
        
        callback = (typeof callback == 'function' ? callback : null)

        // If the first argument is missing or is not a number, throw an Error in err param
        if (!arg1) {
            return callback_(new Error('First arg missing or not a number'))
        }
        
        process.nextTick(() => {
            // Hold on until CPU has been cleaned. Then, execute the code below.
            const data = fib(arg1)
            callback(null, data)
        })
    }
}

const test = new Obj()
const number = 10

test.doSomething(number, (err, value) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log('fibonaci value for %d is %d', number, value)
    }
})

console.log('Called doSomething()')