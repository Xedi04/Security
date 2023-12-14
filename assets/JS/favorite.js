let id = new URLSearchParams(window.location.search).get("id");
let Div = document.querySelector(".image1");

fetch('http://localhost:3000/Favorites/')
    .then(res => res.json())
    .then(data => {
      
        data.forEach(element => {
            Div.innerHTML += `
        <div class="img3">
        <div class="img">
            <img src="${element.image}" alt="">
        </div>
        <div class="img-text">
            <h5>${element.name}{</h5>
            <p>${element.description}</p>
            <div class="but">
                <button id="details">Details</button>
                <button id="delete">Delete</button>
                
            </div>
        </div>    
   </div>
        `
        });
    })

    let Back =document.querySelector("#back");
    Back.addEventListener("click", ()=>{
        window.location="./index.html"
    })