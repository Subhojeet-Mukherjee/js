const arr=['js','ruby','java','cpp']

arr.forEach((item)=>{
    //console.log(item);
    
})

function printMe(item){
    //console.log(item);
    
}

arr.forEach(printMe)

arr.forEach(  (item,index,fullAray) => {
    // console.log(item,index,fullAray);
    
})


const myCoding=[
    {
        langName:"JavaScript",
        langFile:".js"
    },
    {
        langName:"java",
        langFile:".java"
    },
    {
        langFile:"python",
        langFile:".py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.langFile);
    
})