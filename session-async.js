

// const myPromise1 = new Promise((resolve, reject) => {
//     let data = { name: 'abhilash'}

//     if (data) {
//         resolve(data)
//     } else {
//         reject('something went wrong in myPromise1')
//     }
// })

// const myPromise = new Promise((resolve, reject) => {
//     let success = true

//     if (success) {
//         resolve('task completed')
//     } else {
//         reject('something went wrong')
//     }
// })

// // console.log(myPromise);

// myPromise.then((res) => {
//     console.log(res)   
//    myPromise1.then((res) => {
//       console.log(res);      
//    }).catch((err) => {
//     console.log(err);
    
//    })
// }).catch((err) => {
//     console.log(err);
    
// })


const promise = new Promise((resolve) => resolve(1))
const promise1 = new Promise((resolve) => resolve(2))
const promise2 = new Promise((resolve) => resolve(3))

Promise.all([promise, promise1, promise2]).then((res) => {console.log(res)}
)