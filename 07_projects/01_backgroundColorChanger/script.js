const btn=document.querySelectorAll(".button")


btn.forEach(  (button) => 
    button.addEventListener("click", function(e){
        if(button.id==="grey"){
            document.body.style.backgroundColor= button.id
        }
        else if(button.id==="white"){
            document.body.style.backgroundColor= button.id
        }
        else if(button.id==="blue"){
            document.body.style.backgroundColor= button.id
        }
        else if(button.id==="yellow"){
            document.body.style.backgroundColor= button.id
        }
        
    })
)
  


// document.querySelector("#grey").addEventListener("click",function(e){
//     let colortype=e.target.id
//     document.querySelector("body").setAttribute("id",colortype)
    
// })
// document.querySelector("#white").addEventListener("click",function(e){
//     let colortype=e.target.id
//     document.querySelector("body").setAttribute("id",colortype)
    
// })
// document.querySelector("#blue").addEventListener("click",function(e){
//     let colortype=e.target.id
//    document.querySelector("body").setAttribute("id",colortype)
    
// })
// document.querySelector("#yellow").addEventListener("click",function(e){
//     let colortype=e.target.id
//     document.querySelector("body").setAttribute("id",colortype)
    
// })