let navbar = document.querySelector("nav");
let page = 1
window.addEventListener("scroll", () => {
    if (scrollY > 50) {
        navbar.style.backgroundColor = "black"
        navbar.style.transition = "all .5s ease"
    } else {
        navbar.style.backgroundColor = ""
    }
})

//MENU 

let body = document.querySelector("body");
let menuicon = document.querySelector("#m-icon");
let click = document.querySelector(".click");
let menu = document.querySelector(".menu");
let close1 = document.querySelector("#close");

click.style.display = "none"

menuicon.addEventListener("click", () => {
    click.style.display = "flex"
})
close1.addEventListener("click", () => {
    click.style.display = "none"
})

click.addEventListener("click", (e) => {
    if (e.target == click) {
        click.style.display = "none"
    }
})


let imgDiv = document.querySelector(".image1");

function loadMore() {
    fetch(`http://localhost:3000/security?_page=${page}&_limit=3`)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                imgDiv.innerHTML += `
       <div class="img3">
       <i class="bi bi-heart" onclick="addFavorite(${element.id})"></i>
            <div class="img">
                <img src="${element.image}" alt="">
            </div>
            <div class="img-text">
                <h5>${element.name}{</h5>
                <p>${element.description}</p>
                <div class="but">
                    <button id="details" onclick="goTo(${element.id})">Details</button>
                    <button id="delete" onclick="deleteData(${element.id})">Delete</button>
                    <button id="update"><a href="./update.html?id=${element.id}" style="text-decoration:none; color:white;">Update</a></button>
                </div>
            </div>    
       </div>
       `

            });
        })
}

loadMore();

function goTo(id) {
    window.location = `./details.html?id=${id}`;
}

let ADD = document.querySelector("#add");
ADD.addEventListener("click", () => {
    window.location = "./add.html"
})


function deleteData(id) {
    axios.delete(`http://localhost:3000/security/${id}`)
        .then(resu => {
            window.location.reload();
        })

}


let Load = document.querySelector("#load");

Load.addEventListener("click", () => {
    page++;
    loadMore();
})

function addFavorite(id){
    axios.get("http://localhost:3000/security/"+id)
    .then(res=>{
        axios.post("http://localhost:3000/Favorites/", res.data)
    })
}
