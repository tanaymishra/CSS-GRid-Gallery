let all= document.querySelectorAll(".gallery img")
let modal=document.querySelector(".modal")
let modali=document.querySelector(".modal img")
all.forEach((e)=>{
    e.addEventListener("click",(i)=>{
        modal.classList.toggle("m-active")
        console.log(i.path)
        modali.src=`Full/${i.path[0].getAttribute("data-original")}`
    })
})