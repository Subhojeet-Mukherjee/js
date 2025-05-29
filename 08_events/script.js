document.querySelector('#images').addEventListener('click',function(e){
    if(e.target.parentNode.tagName=="LI"){
       e.target.parentNode.remove()
    }
},false)