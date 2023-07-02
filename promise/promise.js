//promise stages
// 1. pending
// 2. fulfilled
// 3. rejected

//Promise is a class
//callback hell
function promDemo(){

    var code;
    console.log("Promise demo 1");

    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
        resolve("success");
        //reject("failed");
        })
        //resolve("suceess");
        //reject("failed");
    })
    promise.then((data)=>{
        console.log(data);
        code = data;
    })
    promise.catch((err)=>{
        console.log(err);
        code = err;
    })

    console.log("Promise demo 2");
    console.log("code =>",code);
}

//promDemo();



function fetchData(){


    return new Promise((res,rej)=>{

        setTimeout(()=>{
            res("data fetched");
        },2000)
    })
}


x = fetchData()
console.log(x);
x.then((data)=>{
    console.log(data);
})
x.catch((err)=>{
    console.log(err);
})

fetchData().then((d)=>{
    console.log(d);
}).catch((err)=>{
    console.log(err);
})

