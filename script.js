
const completedDonation = document.getElementById("completedDonation")
const exploreAllBtn = document.getElementById("exploreAllBtn")
const cardDonation = document.getElementById("cardDonation")
const donationCardMainContainer = document.getElementById("donationCardMainContainer")
completedDonation.classList.add("complated_donation")
async function getApi() {
    let data = await fetch('https://fakestoreapi.com/products')
    let products = await data.json()

}

getApi()

exploreAllBtn.addEventListener("click" , () =>{
    donationCardMainContainer.lastChild.classList.toggle("card_remove")
})