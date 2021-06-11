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



// gallery variables
// Select Each gallery card
const galleryCard = document.getElementsByClassName("gallery-card");
// Select Parent of gallery Card
const galleryWrapperCard = document.querySelector(".gallery__wrapper__card");

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


// Search box on navigation
const searchBox = document.querySelector(".nav__left__searchBar");
// Search box on modal
const modalSearchBox = document.querySelector(".modal__searchBox--text");
// Modal that displays on entire page after user clocks on search box on navigation
const modal = document.querySelector("#modal");
// User input match will display in here
const matchList = document.getElementById("modal__content--list");

// Clear button on modalSearchBox
const clearBtn = document.querySelector(".modal__wrapper__searchBox--clearButton");
//close button on modalSearchBox
const closeBtn = document.querySelector(".modal__wrapper__searchBox--closeButton");






class SearchBar {
  
  // Function to clear text box
 clearTextBox() {
  modalSearchBox.value = "";
  clearSearchBar();
}
// Function to open modal
 openModal() {
  modal.style.display = "block";
}
// Function to close modal
 closeModal() {
  modal.style.display = "none";
  clearTextBox();
}

// match user inputs in search bar and filter
 matchTextToObject(searchText, artistsObject){
  // clear search bar
   this.clearSearchBar();
  // Get each artist in object
  artistsObject.forEach(artist => {
    // All artwork for current artist
    let artistGallery = artist.art;
    // save artist name
    let artistName = artist.name;
  
    // Loop through each artWork for current artist
    artistGallery.forEach(individualArt => {
      // save variable of current art name
      let artName = individualArt.name;
      
      /* Regex for searchText
      g = match all instances of the pattern in a string, not just one,
      i = case-insensitive
      */
      const regex = new RegExp(`${searchText}`, "gi");
      // Check if match between art name and user input
      const match = artName.match(regex);
      // if no match, then go to next artwork
      if(match === null){
      // if there is a match, then dispay in search bar
      } else {
        let imgLocation = individualArt.imgLocation;
          let price = individualArt.price;
          // let searchCardInnerHTML = "";
       this.displaySearchCard(artistName, artName, imgLocation, price);
      }
    })
  })
}

  searchBarUserInput(artistsObject){
    // Listen for open click
    searchBox.addEventListener("click", this.openModal);
    // Listen for close click
    closeBtn.addEventListener("click", this.closeModal);
    // Listen for clear button
    clearBtn.addEventListener("click", this.clearTextBox);

    /* 
   Listener for when user types in to modalSearchBox
   Each key input will run function matchTextToObject
   */
   modalSearchBox.addEventListener("input", () =>
  // Pass input value and artistObject
   this.matchTextToObject(modalSearchBox.value, artistsObject)
 );
    }

 displaySearchCard(artistName, artName, imgLocation, price){
  // add search card to HTML in matchList
   matchList.innerHTML += `
  <div class="searchCard" onmousedown="WillCreateFunctionHere(this)">
  <div class="searchCard-left">
    <img
      src="${imgLocation}"
      alt=""
    />
    <h5>${artName}</h5>
  </div>
  <div class="searchCard-right">
      <h5>${artistName}</h5>
      <h5>${price}</h5>
  </div>
</div>`;

 }

 // Clear searches
 clearSearchBar(){
  matchList.innerHTML = "";
 }
}

// On load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Has loaded");
  const art = new Art();
  const ui = new UI();
  const searchBar = new SearchBar();


  // get all artists data
  art.getAllArtwork().then(
    artistsObject => {
      // Use random number generator to pick random artist
      let randomArtistObject = ui.getRandomArtist(artistsObject);

      // display random artists in gallery
      ui.displayArtwork(randomArtistObject);

      // display specific artist selected by user
      ui.getSpecificArtist(artistsObject);

      // display search card given user input
      searchBar.searchBarUserInput(artistsObject);
  
  // ).then(() => {
  //   // ui.getSpecificArtist();
  // })
  })
});



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