const coding=['js','ruby','cpp','java']

// const val= coding.forEach( (item) =>{
//     console.log(item);
//     return item        
    
// } )

// console.log(val);


const arr =[1,2,3,4,5,6,7,8,9]

// const newArr=arr.filter( (num) => {
//     console.log(num);
//      return num>6 })

// const newArr=arr.filter( (num) => {
//     return num>6
// } )

// console.log(newArr);

// const newArr=[]

// arr.forEach( (item)=>{
//     if(item>4){
//         newArr.push(item)
//     }
// } )

// console.log(newArr);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const bk=books.filter( (item) => item.publish>1981 && item.genre==='Fiction')
  
console.log(bk);

