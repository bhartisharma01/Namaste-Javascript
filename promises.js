const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p1 success", 3000)  })
})

Promise.all([p1]).then(res=>{
    console.log(res)
})