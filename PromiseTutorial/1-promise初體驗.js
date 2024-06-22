// 尚硅谷3 ,4 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const score = Math.floor(Math.random() * 100)
        if (score > 60) {
            resolve('恭喜及格' + score)
        } else {
            reject('不及格' + score)
        }
    }, 1000)
})

// promise
//     .then((result) => {
//         console.log('resolve : ' + result)
//     }, (err) => {
//         console.log('error : ' + err)
//     })

promise
    .then((result) => {
        console.log('resolve : ' + result)
    }).catch((err) => {
        console.log('error : ' + err)
    })
