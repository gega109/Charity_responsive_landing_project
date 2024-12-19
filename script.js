const exploreAllBtn = document.getElementById("exploreAllBtn")
const cardDonation = document.getElementById("cardDonation")
const hiddenCards = document.getElementById("hiddenCards")
const hiddenCardsContainer = document.getElementById("hiddenCardsContainer")
const textHideBtn = document.getElementById("textHide")
const hiddenText = document.getElementById("hiddenText")
const scndTextHideBtn = document.getElementById("scndTextHide")
const scndHiddenText  = document.getElementById("scndHiddenText")

async function getApi() {
  // ეს ჩემი გაკეთებული ჯსონ ფაილია და იქიდან მომაქვს ინფორმაცია
    let data = await fetch('./app.json')
    let products = await data.json()
    products.map((product) =>{
      let div  = document.createElement("div")

      // ეს არის განხორციელებული დონაციის პროცენტულობა 
      let donationLevel = (product.price1 / product.price2) * 100;
      // დივის სიგრძეს ვაძლევ ამ პროცენტულობას,  შესაბამისად ზომას თავისით აძლევს
      
      // იქმნება დონაციის ქარდები 
      div.innerHTML =
      `<div class="donate_card">
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
                  <div class="completed_donation_level" style="width : ${donationLevel}%"></div>
                  </div>
                  <button class="donate_btn "  >Make a Donation</button>
                  </div>
                  </div>`      
                  
          let donationBtn = div.querySelector(".donate_btn")
          let completedDonation = div.querySelector(".completed_donation")
          let completedDonationLevel = div.querySelector(".completed_donation_level")
          let fullDonateText  = div.querySelector("full_donate_text")
          donationBtn.addEventListener("click" , ()=>{
            product.price1+=100
            completedDonation.textContent = `${product.price1}$`
            
            let newDonationFormula = (product.price1 / product.price2) * 100;
            completedDonationLevel.style.width =`${newDonationFormula}%`
            
            if(product.price1 >= 10000){
              donationBtn.setAttribute("disabled", false)
              completedDonationLevel.style.width = "100%"
              completedDonation.textContent = "10000$"
            }
          })
        hiddenCardsContainer.appendChild(div)
    })
}

getApi()
// დონაციის ქარდების გაქრობა და გაჩენა 
exploreAllBtn.addEventListener("click" , () =>{
    hiddenCards.classList.toggle("card_remove")
})

textHideBtn.addEventListener("click" , () =>{
  hiddenText.classList.toggle("show_text")
})
scndTextHideBtn.addEventListener("click" , () =>{
  scndHiddenText.classList.toggle("show_text")
})

