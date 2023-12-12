let file1 =document.querySelector("#file");
let name1=document.querySelector("#name");
let dec=document.querySelector("#des");
let addBTN=document.querySelector("#addbtn");

addBTN.addEventListener("submit", (event)=>{
    event.preventDefault()
     let obj={}
     let src = file1.files[0]
     const reader = new FileReader();
     reader.onload = function (e) {
        obj = {
            image: e.target.result,
            name: name1.value,
            description: dec.value
        }
        axios.post('http://localhost:3000/security', obj)
        .then(res => window.location = "./index.html")
     }
     reader.readAsDataURL(src);
})