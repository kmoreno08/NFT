// Variables
const cartBtn = document.querySelector(".cart__btn");
const closeCartBtn = document.querySelector(".cart__close");
const clearCartBtn = document.querySelector(".cart__clear");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart__overlay");
const cartItems = document.querySelector(".cart__items");
const cartTotal = document.querySelector(".cart__content");
const cartContent = document.querySelector(".cart__content")
const productsDOM = document.querySelector(".products-center");
const sellersDOM = document.querySelector("#seller");
// gallery variables
// Select Each gallery card
const galleryCard = document.getElementsByClassName("gallery-card");
// Select Parent of gallery Card
const galleryWrapperCard = document.querySelector(".gallery__wrapper__card");



// cart array
let cart = [];
 // buttons array
 let buttonsDOM = [];


// getting the art data
class Art {
 async getAllArtwork(){
   // fetch data of all artwork
   let result = await fetch('../data/data.json');
   // json to js
   const data = await result.json()
   // save the artists object
   const artists = data.artist;
  // return artists
   return artists;

   // check for errors
 } catch (error){
   // print errors
    console.log(error);
 }

}


class UI {
  // displays artwork for a given an artist
  displayArtwork(artistInfo){
    let galleryCardInnerHTML = "";
    let result = "";
    // Get the name of artist
    let artistName = artistInfo.name;
  
    // loop through the artwork for specific artist
    artistInfo.art.forEach(art => {
      // save html of each artwork in variable
      result += `<div class="gallery-card">
      <div class="gallery-text">
        <div class="gallery-name">${art.name}</div>
        <div class="gallery-artist">${artistName}</div>
      </div>
      <img src=${art.imgLocation}>
      <button class="bag-btn" >
            <i class="fas fa-shopping-cart"></i>
            add to cart
          </button>
          <button class="eth-btn" >
            ${art.price} Eth
            <i class="fab fa-ethereum fa-lg"></i>
          </button>
    </div>`
  
    });
    // Display card in gallery
    galleryWrapperCard.innerHTML = result; 
  }

  // Random integer to choose artist
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Random artist to display
  getRandomArtist(artists){
    // use a random number to select which artist within length 
    let artistNumber = this.getRandomInt(artists.length);
    // Use random number to pick an artists
    let artist = artists[artistNumber];
    // return artist
    return artist;
  }
  
  // display specific artist in 'Select Artist' section on click
  getSpecificArtist(artistsObject){
      sellersDOM.addEventListener("click", event => {
        let name = "";
      // check if name or amount is clicked and grab artists name
      if(event.target.classList.contains('seller-name') || 
         event.target.classList.contains('seller-amount')){
           // get name and lower case
          name = event.target.parentNode.children[1].innerHTML.toLowerCase();
          // Check if name matches artists name in object
          artistsObject.forEach(artist => {
            console.log(artist);
            // if found match then display artwork
            if(artist.name === name){
              // display artist
              this.displayArtwork(artist);
            }
          })
         }
      // check if image is clicked and grab artists name
      else if(event.target.parentNode.classList.contains('seller-icon')){
        // lowercase name to match 
        name = event.target.parentNode.parentNode.children[1].innerHTML.toLowerCase();
        
        // loop through object to find correct artist
        artistsObject.forEach(artist => {
          console.log(artist);
          // if found match then display artwork
          if(artist.name === name){
            // display artist
            this.displayArtwork(artist);
          }
        })
      }
    })
  }


}


// On load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Has loaded");
  const art = new Art();
  const ui = new UI();


  // get all artists data
  art.getAllArtwork().then(
    artistsObject => {
      // Use random number generator to pick random artist
      let randomArtistObject = ui.getRandomArtist(artistsObject);
      // display random artists in gallery
      ui.displayArtwork(randomArtistObject);
      ui.getSpecificArtist(artistsObject);
      // ui.getSpecificArtist(randomArtistObject);
      
    })
  // ).then(() => {
  //   // ui.getSpecificArtist();
  // })
})



// local storage
/* saving in local storage */
// class Storage {
//   static saveProducts(products){
//     localStorage.setItem("products", JSON.stringify(products));
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const ui = new UI();
//   const products = new Products();

//   // get all products
//   products.getProducts().then(products => {
//     // display all products
//     ui.displayProducts(products);
//     // Then save to local storage
//   Storage.saveProducts(products);
//   });
// })