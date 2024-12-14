
const exploreAllBtn = document.getElementById("exploreAllBtn")
const cardDonation = document.getElementById("cardDonation")
const hiddenCards = document.getElementById("hiddenCards")
async function getApi() {
    let data = await fetch('https://fakestoreapi.com/products')
    let products = await data.json()
}

getApi()

exploreAllBtn.addEventListener("click" , () =>{
    hiddenCards.classList.toggle("card_remove")
})