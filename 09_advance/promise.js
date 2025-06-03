const promiseOne= new Promise(function(resolve,reject){
    //Do an async task
       setTimeout(function(){
        console.log("async task complete");
        resolve()
       },5000)
})

promiseOne.then(()=>{
    console.log("promise consumed");
    
})

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    },1000)
}).then(()=>{
    console.log("async 2 resolved");
    
})

const promiseThree= new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve({username:"chai", email:"chai@example.com"})
        },1000)
})

promiseThree.then(function(username){
    console.log(username);
    
})


const promiseFour= new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username:"Hitesh",password:"123"})
        }else{
            reject("ERROR")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
}).then((name)=>{
    console.log(name);
    
}).catch((err)=>{
    console.log("erroooorr");
    
}).finally(()=>{
    console.log("The promise is either resoled or rejected");
    
})



const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve( {username:"javascript", password:"123"})
            
        }else{
            reject("error: js went wrong")
        }
    },1000)
})


async function consumePromiseFive(){
    try{
        const response= await promiseFive
        console.log(response);
        
    }
    catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


async function getAllUsers() {
    try{
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
     const data = await response.json()
     console.log(data);
    }
    catch (error){
        console.log("E:",error)    
    }    
}
getAllUsers()











