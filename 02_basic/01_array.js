let arr= [5,6,20,3,7]

// console.log(arr[2]);

const myArr= new Array(1,2,3,4)

//Array methods

// myArr.push(6)
// myArr.push(9)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);
 
// myArr.unshift(0)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr= myArr.join()

// console.log(myArr);
// console.log(newArr);

//********************************* diff bet slice and splice ****************************************

const newArr= myArr.slice(1,3)
console.log(myArr);

console.log(newArr);

const newerArr= myArr.splice(1,3)
console.log(myArr);
console.log(newerArr);