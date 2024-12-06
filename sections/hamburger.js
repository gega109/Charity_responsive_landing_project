const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click" , () =>{
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
    hamburger.classList.toggle("active")
})