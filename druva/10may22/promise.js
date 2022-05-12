// const fakePromiseCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('connection Timeout:(')
//         } else {
//             success(`here is your fake data ${url}`)
//         }
//     }, delay)
// }

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('connection Timeout:(')
            } else {
                resolve(`here is your fake data ${url}`)
            }
        }, delay)
    })
}


// fakePromiseCallback('books.com', function () {
//     console.log("it worked ")
// }, function () {
//     console.log("error")


// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("it worked... (page1)")

//         IfakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("it worked... (page2)")

//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("it worked... (page3)")
//                     })

//                     .catch(() => {
//                         console.log("oh noooo.error (page 2)")
//                     })
//             })
//             .catch(() => {
//                 console.log("oh noo ,error (page1)")
//             })


//     })



fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("it worked... (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })

    .then((data) => {
        console.log("it worked... (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })

    .then((data) => {
        console.log("it worked... (page3)")
        console.log(data)
    })

    .catch((err) => {
        console.log("oh noo ,requesst failed")
        console.log(err)
    })


