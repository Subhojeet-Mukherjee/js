//async await GET

// const URL="https://jsonplaceholder.typicode.com/todos/1"
// async function getData(){
//     try {
//         let response= await fetch(URL)
//         let data= await response.json()
//         console.log(data.title);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getData() /

//then catch GET request

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((response)=> response.json())
// .then((data)=> console.log(data))
// .catch((err)=>console.log(`ERROR: ${err}`))




//then catch POST request

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



//async await POST request

// async function getData() {

//     let response=await fetch("https://jsonplaceholder.typicode.com/posts",

//         {
//             method: 'POST',
//             body: JSON.stringify({
//                   title: 'Hitesh',
//                   body: 'Chai aur Code',
//                   userId: 12,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8'
//             }
//         }
//     )

//     let data=await response.json()
//     console.log(data);
 
// }
// getData()





