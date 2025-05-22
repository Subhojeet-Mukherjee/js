const score=400

const balance = new Number(100)

console.log(balance);
console.log(score);


console.log(balance.toFixed(2)); // decimal value

const other = 123.953
console.log(other.toPrecision(3)); // number of significant digits with precision

const otherNumber=  23.6733
console.log(otherNumber.toPrecision(3));

const hundereds=100000

console.log(hundereds.toLocaleString());
console.log(hundereds.toLocaleString('en-IN'));

//**************************************************Maths*********************** */

console.log(Math.abs(-4));

console.log(Math.round(4.6));

console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.min(4,6,1,7,5));
console.log(Math.max(5,9,6,2));

console.log(Math.random()); // generates random value bet 0 and 1 in decimal 

console.log(Math.floor((Math.random()*10))+1);    // generate whole number bet 1 to 10

const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min+1))+min));   // generate whole number bet 10 and 20

//formula: (Math.random()*(max-min+1))+min
