// Select Each gallery card
const galleryCard = document.getElementsByClassName("gallery-card");
// Select Parent of gallery Card
const galleryWrapperCard = document.querySelector(".gallery__wrapper__card");




// Select each artists
const sellerChrisLizarraga = document.querySelector("#seller--chris-lizarraga");
const sellerDeanAndJames = document.querySelector("#seller--dean-and-james");
const sellerFlorianEyemann = document.querySelector("#seller--florian-eyemann");
const sellerJasonSims = document.querySelector("#seller--jason-sims");
const sellerJosephKlibansky = document.querySelector("#seller--joseph-klibansky");
const sellerKatyaZvereva = document.querySelector("#seller--katya-zvereva");
const sellerMaryRonayne = document.querySelector("#seller--mary-ronayne");
const sellerTianYonghua = document.querySelector("#seller--tian-yonghua");

/* First Empty gallery completely then add correct artwork */
// listen for click - Artist Chris Lizarraga 
sellerChrisLizarraga.addEventListener("click", function (){
  emptyGallery();
  addChrisLizarragaArt();
});

// listen for click - Artist Dean and James
sellerDeanAndJames.addEventListener("click", function (){
  emptyGallery();
  addDeanAndJamesArt();
});

// listen for click - Artist Florian Eyemann 
sellerFlorianEyemann.addEventListener("click", function (){
  emptyGallery();
  addFlorianEyemannArt();
});

// listen for click - Artist Jason Sims 
sellerJasonSims.addEventListener("click", function (){
  emptyGallery();
  addJasonSimsArt();
});

// listen for click - Artist Joseph Klibanksy
sellerJosephKlibansky.addEventListener("click", function (){
  emptyGallery();
  addJosephKlibanskyArt();
});

// listen for click - Artist Katya Zvereva
sellerKatyaZvereva.addEventListener("click", function (){
  emptyGallery();
  addKatyaZverevaArt();
});

// listen for click - Artist Mary Ronayne
sellerMaryRonayne.addEventListener("click", function (){
  emptyGallery();
  addMaryRonayneArt();
});

// listen for click - Artist Tian Yonghua
sellerTianYonghua.addEventListener("click", function (){
  emptyGallery();
  addTianYonghuaArt();
});


// Add all available art per artist
function addChrisLizarragaArt () {
  let galleryCardInnerHTML = "";
  const artist = "Chris Lizarraga";
  // Number of artwork artists has
  chrisArtLength = dataArt.chris_lizarraga.length;
  // Loop though each art work and get the correct data
  for(let i = 0; i < chrisArtLength; i++){
    // Save the artName and image location for display in gallery
    let artName = dataArt.chris_lizarraga[i].art
    let location = dataArt.chris_lizarraga[i].location;
    let amount = dataArt.chris_lizarraga[i].amount;
    // Add info to variable 
    galleryCardInnerHTML += `<div class="gallery-card">
    <div class="gallery-text">
      <div class="gallery-name">${artName}</div>
      <div class="gallery-artist">${artist}</div>
    </div>
    <img src=${location}>
    <button class="bag-btn" >
          <i class="fas fa-shopping-cart"></i>
          add to bag
        </button>
        <button class="eth-btn" >
          ${amount} Eth
          <i class="fab fa-ethereum fa-lg"></i>
        </button>
  </div>`;
  }
  /* Once all available artwork is added then add to 
     html for display.
     */

  galleryWrapperCard.innerHTML = galleryCardInnerHTML; 
}

function addDeanAndJamesArt () {
  let galleryCardInnerHTML = "";
  const artist = "Dean and James";
  deanAndJamesLength = dataArt.dean_and_james.length;
  for(let i = 0; i < deanAndJamesLength; i++){
    let artName = dataArt.dean_and_james[i].art
    let location = dataArt.dean_and_james[i].location;
    let amount = dataArt.dean_and_james[i].amount;
    galleryCardInnerHTML += `<div class="gallery-card">
    <div class="gallery-text">
      <div class="gallery-name">${artName}</div>
      <div class="gallery-artist">${artist}</div>
    </div>
    <img src=${location}>
    <button class="bag-btn" >
          <i class="fas fa-shopping-cart"></i>
          add to bag
        </button>
        <button class="eth-btn" >
          ${amount} Eth
          <i class="fab fa-ethereum fa-lg"></i>
        </button>
  </div>`;
  }
  galleryWrapperCard.innerHTML = galleryCardInnerHTML; 
}

function addFlorianEyemannArt () {
  let galleryCardInnerHTML = "";
  const artist = "Florian Eyemann";
  florianEyemannLength = dataArt.florian_eyemann.length;
  for(let i = 0; i < florianEyemannLength; i++){
    let artName = dataArt.florian_eyemann[i].art
    let location = dataArt.florian_eyemann[i].location;
    let amount = dataArt.florian_eyemann[i].amount;
    galleryCardInnerHTML += `<div class="gallery-card">
    <div class="gallery-text">
      <div class="gallery-name">${artName}</div>
      <div class="gallery-artist">${artist}</div>
    </div>
    <img src=${location}>
    <button class="bag-btn" >
          <i class="fas fa-shopping-cart"></i>
          add to bag
        </button>
        <button class="eth-btn" >
          ${amount} Eth
          <i class="fab fa-ethereum fa-lg"></i>
        </button>
  </div>`;
  }
  galleryWrapperCard.innerHTML = galleryCardInnerHTML; 
}

function addJasonSimsArt () {
  let galleryCardInnerHTML = "";
  const artist = "Jason Sims";
  jasonSimsLength = dataArt.jason_sims.length;
  for(let i = 0; i < jasonSimsLength; i++){
    let artName = dataArt.jason_sims[i].art
    let location = dataArt.jason_sims[i].location;
    let amount = dataArt.jason_sims[i].amount;
    galleryCardInnerHTML += `<div class="gallery-card">
    <div class="gallery-text">
      <div class="gallery-name">${artName}</div>
      <div class="gallery-artist">${artist}</div>
    </div>
    <img src=${location}>
    <button class="bag-btn" >
          <i class="fas fa-shopping-cart"></i>
          add to bag
        </button>
        <button class="eth-btn" >
          ${amount} Eth
          <i class="fab fa-ethereum fa-lg"></i>
        </button>
  </div>`;
  }
  galleryWrapperCard.innerHTML = galleryCardInnerHTML; 
}

function addJosephKlibanskyArt () {
  let galleryCardInnerHTML = "";
  const artist = "Joseph Klibansky";
  josephKlibanskyLength = dataArt.joseph_klibansky.length;
  for(let i = 0; i < josephKlibanskyLength; i++){
    let artName = dataArt.joseph_klibansky[i].art
    let location = dataArt.joseph_klibansky[i].location;
    let amount = dataArt.joseph_klibansky[i].amount;
    galleryCardInnerHTML += `<div class="gallery-card">
    <div class="gallery-text">
      <div class="gallery-name">${artName}</div>
      <div class="gallery-artist">${artist}</div>
    </div>
    <img src=${location}>
    <button class="bag-btn" >
          <i class="fas fa-shopping-cart"></i>
          add to bag
        </button>
        <button class="eth-btn" >
          ${amount} Eth
          <i class="fab fa-ethereum fa-lg"></i>
        </button>
  </div>`;
  }
  galleryWrapperCard.innerHTML = galleryCardInnerHTML; 
}

function addKatyaZverevaArt () {
  let galleryCardInnerHTML = "";
  const artist = "Katya Zvereva";
  katyaZverevaLength = dataArt.katya_zvereva.length;
  for(let i = 0; i < katyaZverevaLength; i++){
    let artName = dataArt.katya_zvereva[i].art
    let location = dataArt.katya_zvereva[i].location;
    let amount = dataArt.katya_zvereva[i].amount;
    galleryCardInnerHTML += `<div class="gallery-card">
    <div class="gallery-text">
      <div class="gallery-name">${artName}</div>
      <div class="gallery-artist">${artist}</div>
    </div>
    <img src=${location}>
    <button class="bag-btn" >
          <i class="fas fa-shopping-cart"></i>
          add to bag
        </button>
        <button class="eth-btn" >
          ${amount} Eth
          <i class="fab fa-ethereum fa-lg"></i>
        </button>
  </div>`;
  }
  galleryWrapperCard.innerHTML = galleryCardInnerHTML; 
}

function addMaryRonayneArt () {
  let galleryCardInnerHTML = "";
  const artist = "Mary Ronayne";
  maryRonayneLength = dataArt.mary_ronayne.length;
  for(let i = 0; i < maryRonayneLength; i++){
    let artName = dataArt.mary_ronayne[i].art
    let location = dataArt.mary_ronayne[i].location;
    let amount = dataArt.mary_ronayne[i].amount;
    galleryCardInnerHTML += `<div class="gallery-card">
    <div class="gallery-text">
      <div class="gallery-name">${artName}</div>
      <div class="gallery-artist">${artist}</div>
    </div>
    <img src=${location}>
    <button class="bag-btn" >
          <i class="fas fa-shopping-cart"></i>
          add to bag
        </button>
        <button class="eth-btn" >
          ${amount} Eth
          <i class="fab fa-ethereum fa-lg"></i>
        </button>
  </div>`;
  }
  galleryWrapperCard.innerHTML = galleryCardInnerHTML; 
}

function addTianYonghuaArt () {
  let galleryCardInnerHTML = "";
  const artist = "Tian Yonghua";
  tianYonghuaLength = dataArt.tian_yonghua.length;
  for(let i = 0; i < tianYonghuaLength; i++){
    let artName = dataArt.tian_yonghua[i].art
    let location = dataArt.tian_yonghua[i].location;
    let amount = dataArt.tian_yonghua[i].amount;
    galleryCardInnerHTML += `<div class="gallery-card">
    <div class="gallery-text">
      <div class="gallery-name">${artName}</div>
      <div class="gallery-artist">${artist}</div>
    </div>
    <img src=${location}>
    <button class="bag-btn" >
          <i class="fas fa-shopping-cart"></i>
          add to bag
        </button>
        <button class="eth-btn" >
          ${amount} Eth
          <i class="fab fa-ethereum fa-lg"></i>
        </button>
  </div>`;
  }
  galleryWrapperCard.innerHTML = galleryCardInnerHTML; 
}


// function to Clear gallery of previous artwork
function emptyGallery() {
  while(galleryCard.length > 0) galleryCard[0].remove();
}




