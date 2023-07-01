
const sciencs = (user)=>{

    console.log("Science",user)
}
const commerce = (user)=>{

console.log("commerce",user)
}

const waitingList = (user)=>{

    console.log("waitingList",user)

}

const getAdmission = (cb,user)=>{

    cb(user)
}



const user = {
    name:"abc",
    per:67,
}


if(user.per>80){
    getAdmission(sciencs,user)
}
else if(user.per>60){
    getAdmission(commerce,user)
}
else{
    getAdmission(waitingList,user)
}



///map filter, 


































