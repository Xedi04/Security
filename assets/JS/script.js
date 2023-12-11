let navbar=document.querySelector("nav");

window.addEventListener("scroll",()=>{
    if(scrollY>50){
        navbar.style.backgroundColor="black"
        navbar.style.transition="all .5s ease"
    }else{
        navbar.style.backgroundColor=""
    }
})

//MENU 

let body=document.querySelector("body");
let menuicon=document.querySelector("#m-icon");
let click=document.querySelector(".click");
let menu=document.querySelector(".menu");
let close1=document.querySelector("#close");

click.style.display="none"

menuicon.addEventListener("click", ()=>{
    click.style.display="flex"
})
close1.addEventListener("click", ()=>{
    click.style.display="none"
})

click.addEventListener("click", (e)=>{
    if(e.target==click){
        click.style.display="none"
    }
})

