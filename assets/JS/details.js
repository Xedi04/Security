let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
let Div=document.querySelector(".image1");

fetch('http://localhost:3000/security/'+id)
.then(res=>res.json())
.then(data=>{
    
    Div.innerHTML+=`
    <div class="img3">
            <div class="img">
                <img src="${data.image}" alt="">
            </div>
            <div class="img-text">
                <h5>${data.name}{</h5>
                <p>${data.description}</p>
                <div class="but">
                    <button id="details">Details</button>
                    <button id="delete">Delete</button>
                    
                </div>
            </div>    
       </div>
    `
})