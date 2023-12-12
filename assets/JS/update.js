let Name=document.querySelector("#name").value;
let Des=document.querySelector("#des").value;
let Form=document.querySelector("#form").value;
let Submit=document.querySelector("#submit").value;


Submit.addEventListener("submit", ()=>{
fetch("http://localhost:3000/security")
.then(res=>res.json())
.then(data=>{
    
})
})

