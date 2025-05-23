let myDate= new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
 
let myCreatedDate= new Date(2023,0,23)
// let myCreatedDate= new Date(2023,0,23,5,3)
// let myCreatedDate= new Date("2023-01-24")
  
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default',{

    weekday:"long",
    day:"2-digit"
}))