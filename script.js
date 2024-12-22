const exploreAllBtn = document.getElementById("exploreAllBtn")
const cardDonation = document.getElementById("cardDonation")
const hiddenCards = document.getElementById("hiddenCards")
const hiddenCardsContainer = document.getElementById("hiddenCardsContainer")
const textHideBtn = document.getElementById("textHide")
const secDonation = document.getElementById("secDonation")
const hiddenText = document.getElementById("hiddenText")
const scndTextHideBtn = document.getElementById("scndTextHide")
const scndHiddenText  = document.getElementById("scndHiddenText")
let zero = 0;
let cardLength = 3;


async function getApi(zero,cardLength) {
  // ეს ჩემი გაკეთებული ჯსონ ფაილია და იქიდან მომაქვს ინფორმაცია
    let data = await fetch('./app.json')
    let products = await data.json()
   
    products.slice(zero,cardLength).map((product) =>{
      let div  = document.createElement("div")
      
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
                  <div class="completed_donation_level" ></div>
                  </div>
                  <p class="full_donate_text"> Congrats$ </p>
                  <button class="donate_btn">Make a Donation</button>
                  </div>
                  </div>`      
                  
          let donationBtn = div.querySelector(".donate_btn")
          let completedDonation = div.querySelector(".completed_donation")
          let completedDonationLevel = div.querySelector(".completed_donation_level")
          let fullDonateText  = div.querySelector(".full_donate_text")
          
    // ეს არის განხორციელებული დონაციის პროცენტულობა 
    // დივის სიგრძეს ვაძლევ ამ პროცენტულობას,  შესაბამისად ზომას თავისით აძლევს
    
    
    donationBtn.addEventListener("click" , ()=>{
      let donationWidth = (product.price1 / product.price2) * 100;
      product.price1+=999
      completedDonation.textContent = `${product.price1}$`
      completedDonationLevel.style.width =`${donationWidth}%`
            
            if(product.price1 >= 10000){
              donationBtn.setAttribute("disabled", false)
              completedDonationLevel.style.width = "100%"
              completedDonation.textContent = "10000$"
              fullDonateText.style.display = "block"
            }
          })
          secDonation.appendChild(div)
    })
}




let checkCard = true
// დონაციის ქარდების გაქრობა და გაჩენა 
exploreAllBtn.addEventListener("click" , () =>{
  // hiddenCards.classList.toggle("card_remove")
  if(checkCard){
    getApi(3,6)
    checkCard = false
    
  }else{
    
  }
})
getApi(0,3)





textHideBtn.addEventListener("click" , () =>{
  hiddenText.classList.toggle("show_text")
})
scndTextHideBtn.addEventListener("click" , () =>{
  scndHiddenText.classList.toggle("show_text")
})





let footerArr = [
  {
    contact_logo : "images/phone_icon.png",
    contact_name : "Phone",
    contact_method : "+995 599 919 049",
    background : "#eae9da",
    link : "tel:+995 599 919 049"
  },
  {
    contact_logo : "images/gmail_icon.png",
    contact_name : "Mail",
    contact_method : "andria4@gmail.com",
    background : "#E3E1CB",
    link : "https://mail.google.com/mail/u/0/#drafts?compose=DmwnWrRqhSJwLTbsllkzrdcPQMmkPRrLqNwLdthglXFKSQrGTJhFvVQdwhvXqxMtKczTwsWKRHfQ"
  },
  {
    contact_logo : "images/location_icon.png",
    contact_name : "Address",
    contact_method : "Andria's Bukhari",
    background : "#CBC8AD",
    link : "https://www.google.com/maps/place/Andria's+Bukhari/data=!4m2!3m1!1s0x0:0xf809f41f90df6f61?sa=X&ved=1t:2428&ictx=111"
  },
]

let mainDiv = document.getElementById("onlineContactBox")
footerArr.map((product) =>{
  let div = document.createElement("div")
  div.style.background = `${product.background}`
  div.classList.add("online_contact_card")
  div.innerHTML = `
        <div class="contact_logo">
          <div class="contact_logo_circle">
            <img src="${product.contact_logo}" alt="">
          </div>
        </div>
          <div class="contact_type">
            <p class="contact_type_name">${product.contact_name}</p>
            <a href="${product.link}" target="_blank" class="contact_method">${product.contact_method}</a>
          </div>
  `
  mainDiv.appendChild(div)
})