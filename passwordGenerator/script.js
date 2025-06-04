const capChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const smallChar="abcdefghijklmnopqrstuvwxyz"
const num="0123456789"
const special= "!@#$%^&*()_+=/<>{[}\}"
const all=capChar+smallChar+num+special

document.querySelector("#btn").addEventListener("click",(e)=>{
    e.preventDefault()
   
    let length= document.querySelector("#lenghtInput").value
    if(length<4 || isNaN(Number(length))){

        document.querySelector("#error").innerHTML="Please input valid lenght"
        return;
    }
    else{
       document.querySelector("#error").innerHTML=""

    let iForSmallchar= Math.floor(Math.random()*smallChar.length)
    let iForCapCHAR= Math.floor(Math.random()*capChar.length)
    let iForNum= Math.floor(Math.random()*num.length)
    let iForSpecial= Math.floor(Math.random()*special.length)
    let password="";

    password+=capChar[iForCapCHAR]
    password+=smallChar[iForSmallchar]
    password+=num[iForNum]
    password+=special[iForSpecial]
        
    for(let i=0;i<length-4;i++){
        password+=all[Math.floor(Math.random()*all.length)]
    }

    let arr=Array.from(password)
    let final="";

    for(let i=0;i<password.length;i++){
        
        final += arr.splice(Math.floor(Math.random()*arr.length),1)

    }

document.querySelector("#passwordOutput").value= final
    
}},false)

document.querySelector("#show").addEventListener("click",(e)=>{
    e.preventDefault()
    const output= document.querySelector("#passwordOutput")
    if(output.type ==="password"){
    output.type="text"
    } else{
        output.type="password"
    }
})













