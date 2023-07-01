function test(){

    console.log("test function")
}

function demo(a){
    a()
}

// demo(12)
// demo("royal")
// demo(12.22)
// demo(true)
demo(test)

const pdfHandler = (filename)=>{

    console.log("pdf handler",filename)
    return true
}
const TextHandler = (filename)=>{
    
    console.log("text handler",filename)
    return true
}
const JpgHandler = (filename)=>{
    
    console.log("jpg  handler",filename)
    return true
}

const uploadFile= (cb,filename) =>{

    //txthandler
    flag = cb(filename)
    console.log("flag",flag)

}


filename = "abc.pdf"
if(filename.endsWith(".pdf"))
{
    uploadFile(pdfHandler,filename)
}
else if(filename.endsWith(".txt")){
    uploadFile(TextHandler,filename)
}
else if(filename.endsWith(".jpg")){
    uploadFile(JpgHandler,filename)
}























