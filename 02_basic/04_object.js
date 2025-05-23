//const tinderUser= new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn= false


//console.log(tinderUser);

const regularUser={
    email:"sone@gmail.com",
    fullName:{
        userFullName:{
        firstName:"Hitesh",
        lastName:"Das"

    }}
}
//console.log(regularUser.fullName.userFullName.firstName);



const obj1={name1:'RAM',age1: 25}
const obj2= {name2:'Lax', age2:50}

//const obj3={obj1,obj2}

//const obj3=Object.assign(obj1,obj2)
//const obj3= Object.assign({},obj1,obj2)

//console.log(obj1);                        
//console.log(obj3);

const obj3={...obj1,...obj2}
//console.log(obj3)

const user=[
    {
        id:1,
        email:"some@gmail.com"
},
{
    id:2,
    email:"some@microsoft.com"
}]

//console.log(user[0].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('123abc'));




