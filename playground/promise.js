/* basic promise */
let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise works!');
        reject('promise not work!');
    }, 2000)
})

somePromise.then(res => {
    console.log(res)
}).catch(error => {
    console.log(error)
})

/* advanced promise */
let advancedPromise = ((a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(`Result is: ${a+b}`)
            } else {
                reject('reject, because type data not number')
            }
        }, 3000)
    })
})

advancedPromise(2,3)
.then(res => {
    console.log(res);
    return advancedPromise('b', 10);
})
.then(res => {
    console.log(res)
})
.catch((error) => {
    console.log(error)
})