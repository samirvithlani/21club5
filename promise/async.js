function fetchData(){

    return new Promise((res,rej)=>{
        setTimeout(()=>{
            //res({name:"sachin",age:23})
            rej({reason:"failed"})
        },2000)
    })
}

async function getData(){


    try{
        const user = await fetchData()
        console.log(user);  
    }catch(err){
        console.log(err);
    }

    //console.log(user.name);


}
getData();