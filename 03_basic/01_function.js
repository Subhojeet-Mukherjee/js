// const abc=function sayMyName (){
//     console.log("H");
//     console.log("e");  
//}

// abc()

function add(num1,num2){
return num1+num2
}

const result=add(5,3)
//console.log(result);

function logInUserMessage(username){
    return `${username} just logged in`
}
//console.log(logInUserMessage("Hietsh"))

function calculateCartPrice(val1,val2,...num1){
    return num1

}

//console.log(calculateCartPrice(200,400,500,1000));

const user={
    username:"Hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`USERNAME IS ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user);

// //handleObject({
//     username:'hitesh',
//     price:199
// })

const arr=[5,6,9,100]

function returnSecondValue(anyArray) {
    return anyArray[2]
    
}
//console.log(returnSecondValue(arr));
