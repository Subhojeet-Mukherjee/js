//  Object.create  // this creates singleton

//objects literals

const mySym= Symbol("key1")

const jsUser={
    "name": "Ram",
    [mySym]:"myKey1",
    email: "ram@google.com",
    age:22    
}
//console.log(jsUser["name"]);
//console.log(jsUser.age);
// console.log(typeof jsUser[mySym]);

// jsUser.email="g@chatgot.com"

// Object.freeze(jsUser)
// jsUser.email="m@microsft.com"
// console.log(jsUser)

jsUser.greeting=function(){
    console.log("Hello Js User");
    
}
jsUser.greetingTwo= function(){
    console.log(`Hello Js User, ${this.name}`)
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())