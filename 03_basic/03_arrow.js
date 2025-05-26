const myObj={
    username:"Hitesh",
    price:199,
    welcome:function (){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        }
}

// myObj.welcome()
// myObj.username="sam"
// myObj.welcome()
// console.log(this);

// function chai(){
//     let usern= "Hitesh"
//     console.log(this);
    
// }
// chai()

// const chai=() => {
//     let usern="Hitesh"
//     console.log(this);
    
// }
// chai()

// const addTwo= function(num1,num2){
//     return num1+num2
// }

// const addTwo= (num1,num2) => {
//     return num1+num2
// }

// const addTwo= (num1,num2) => num1 + num2

// const addTwo= (num1,num2) => (num1 + num2)

// const addTwo= (obj1,obj2) => ({userName: "Hitesh"})

// console.log(addTwo(5,6))



const obj = {
  name: "My Object",
  regular: function() { console.log("Regular:", this); },
  arrow: () => { console.log("Arrow:", this); }
}

obj.regular()
obj.arrow()
