// const arr=[1,2,3]

// const initialValue=0

// const total = arr.reduce( (acc,curval) => {
//     console.log(`acc : ${acc} & curval : ${curval}`);
//     return acc + curval    
// } , initialValue )

// console.log(total);


const shoppingCart=[
    {
        courseName: "Js",
        price: 100
    },
    {
        courseName: "python",
        price:1000
    },
    {
        courseName:"Mobile dev",
        price:10000
    }
]

const totalCart= shoppingCart.reduce( (acc,item) => acc + item.price, 0  )

console.log(totalCart);
