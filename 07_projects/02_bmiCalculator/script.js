const height= document.querySelector("#height")
const weight= document.querySelector("#weight")
const resultid=document.querySelector("#results")
const final =document.querySelector("#final")

document.querySelector("#calculate").addEventListener("click",function(e){
       e.preventDefault()
        const fheightcm=height.value 
        const fweight=weight.value

        if(fheightcm =='' || isNaN(Number(fheightcm)) || fheightcm <= 0){
        resultid.innerText= "Please enter a valid input"
        final.innerHTML=""
            
        } else if(fweight=='' || isNaN(Number(fweight)) || fweight<=0){
            resultid.innerHTML= "Please enter a valid input"
            final.innerHTML=""
        } else {
        const fheight=fheightcm/100
        
        const result= (fweight/(fheight*fheight)).toFixed(2)

        resultid.innerHTML= `Your BMI is: ${result}`

        if(0 < result && result < 18.6){
            final.innerHTML= "You are Under Weight"
        } else if (18.6 <= result && result <24.9){
           final.innerHTML=" You are in Normal Range"
        } else {
           final.innerHTML="You are Over Weight"
        }
        
}},false)



