const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'AAAAA',
            age: 123123
        });
        // reject('Something went wrong!')
    }, 1500);
    
});

console.log('before');

promise.then((data) => {
    console.log('1', data)
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
            // reject('Something went wrong!')
        }, 1500);
        
    });
}).then((str) => {
    console.log('str: ', str)
}).catch((error) => {
    console.log('error: ', error)
})


console.log('after');