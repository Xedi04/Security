let id = new URLSearchParams(window.location.search).get("id");
let Name = document.querySelector("#name");
let Des = document.querySelector("#des");
let Form = document.querySelector("#form");
let Submit = document.querySelector("#submit");
let File1 = document.querySelector("#fayl");
let ImgDiv = document.querySelector("#imgdiv");


fetch(`http://localhost:3000/security/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        ImgDiv.src = data.image
        Name.value = data.name;
        Des.value = data.description;

    })

File1.addEventListener('input', (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            ImgDiv.src = reader.result;
        }
    }
})

Form.addEventListener("submit", (event)=>{
    event.preventDefault()
    axios.put(`http://localhost:3000/security/${id}`,{
        image:ImgDiv.src,
        name:Name.value,
        description:Des.value
    })
    .then(res=>{
        window.location="./index.html"
    })
})
