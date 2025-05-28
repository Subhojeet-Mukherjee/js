// const h2=document.querySelector(".heading2")
// h2.append(" from me")

// const h1=document.querySelector(".heading2")
// // console.log(h2)

// const newh2=document.createElement("h2")
// newh2.textContent="JavaScript from me"
// h1.replaceWith(newh2)

// let i=1
// const box= document.querySelectorAll(".box")
// box.forEach((item)=>{
//     item.append( ` box ${i++}`)
// })


// const nav= document.querySelector("nav")
// nav.style.color="red"
// nav.style.backgroundColor="green"

// const div=document.querySelector("div")
// div.firstElementChild.style.color="green"
// div.lastElementChild.style.color="green"

// const li=document.querySelectorAll("li")
// li.forEach((item)=> item.style.backgroundColor="cyan" )


// const btn=document.createElement("button")
// btn.innerText="click me"
// btn.style.color="white"
// btn.style.backgroundColor="red"
// document.body.appendChild(btn)

// const bg=document.querySelector(".bg-black")
// bg.classList.add("new")

const parent= document.querySelector(".parent")
//console.log(parent.children);
// console.log(parent.children[0]);
// console.log(parent.children[0].innerText);

for (let index = 0; index < parent.children.length; index++) {
   //console.log(parent.children[index].innerHTML);   
    
}

parent.children[0].style.color="red"

// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

const dayOne= document.querySelector(".day")
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

