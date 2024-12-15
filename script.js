
const exploreAllBtn = document.getElementById("exploreAllBtn")
const cardDonation = document.getElementById("cardDonation")
const hiddenCards = document.getElementById("hiddenCards")
const hiddenCardsContainer = document.getElementById("hiddenCardsContainer")
async function getApi() {
    let data = await fetch('./app.json')
    let products = await data.json()
    products.map((product) =>{
        let div  = document.createElement("div")
        div.innerHTML = `<div class="donate_card">
                <div class="donate_card_picture">
                  <img src="${product.img}" alt="" >
                  <div class="donate_card_picture_meaning"><p>${product.img_meaning}</p></div>
                </div>
                <div class="donate_card_description">
                  <h2>${product.description}</h2>
                  <div class="donate_card_donation" id="cardDonation">
                    <p class="completed_donation" >${product.price1}$</p>
                    <p class="goal_donation" > $ ${product.price2}</p>
                  </div>
                  <div class="donate_card_level">
                    <div class="completed_donation_level"></div>
                  </div>
                  <button class="donate_btn">Make a Donation</button>
                </div>
              </div>`
        hiddenCardsContainer.appendChild(div)
    })
}

getApi()

exploreAllBtn.addEventListener("click" , () =>{
    hiddenCards.classList.toggle("card_remove")
})