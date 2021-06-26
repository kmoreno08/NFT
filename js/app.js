// Variables
const cartBtn = document.querySelector(".cart__btn");
const closeCartBtn = document.querySelector(".cart__close");
const clearCartBtn = document.querySelector(".cart__clear");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart__overlay");
const cartItems = document.querySelector(".cart__items");
const cartTotal = document.querySelector(".cart__total");
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
      <button class="bag-btn" data-id=${art.id}>
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


  ////// Cart ///

  getBagButtons(){
    const buttons = [...document.querySelectorAll(".bag-btn")];
    
    buttonsDOM = buttons;
    buttons.forEach(button => {
      // will return id's
      let id = button.dataset.id;
      console.log(id);
      let inCart = cart.find(item => item.id === id);
      // check if item is in the cart
      if(inCart){
        // Change text and disable button if item is in cart
        button.innerText = "In Cart";
        button.disabled = true;
      }
      // item is not in cart, change the item to show in cart on click
        button.addEventListener('click', (event) => {
          // Changes from add to bag to in cart
          event.target.innerText = "In Cart";
          // Disable in cart button
          event.target.disabled = true;
          // Grab art information and assign amount to 1
          let cartItem = {...Storage.getArt(id), amount:1};
          // add art to the cart
          cart = [...cart, cartItem];
          // save art in local Storage
          Storage.saveCart(cart);
          // set cart values
          this.setCartValues(cart);
          // display the cart items
          this.addCartItem(cartItem);
          // show the cart 
          this.showCart();
        })
    })
}
  setCartValues(cart){
  let tempTotal = 0;
  let itemsTotal = 0;
  // Go through each item to update price and amount
  cart.map(item => {
    // Total price
    tempTotal += item.price * item.amount;
    // Total number of items
    itemsTotal += item.amount;
  })
  // Total amount to two decimals
  cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
  cartItems.innerText = itemsTotal;
  }


  addCartItem(item){
    console.log("In Add Cart Item");
    console.log(item);
    const div = document.createElement('div');
    div.classList.add('cart__item');
    div.innerHTML = `<img src="${item.imgLocation}" alt="art"/>
    <div>
      <h4>${item.name}</h4>
      <h5>${item.price} Eth</h5>
      <span class="remove-item" data-id=${item.id}>remove</span>
    </div>
    <div>
      <i class="fas fa-chevron-up" data-id=${item.id}></i>
      <p id="item-amount">${item.amount}</p>
      <i class="fas fa-chevron-down" data-id=${item.id}></i>
    </div>`;
    cartContent.appendChild(div);
    console.log(div);
    console.log(cartContent);
  }

  // Add classes to show cart
  showCart(){
    cartOverlay.classList.add('transparentBcg');
    cartDOM.classList.add('showCart');
   }

   setupAPP(){
     // Check if info in getCart
    cart = Storage.getCart();
    // set values in cart
    this.setCartValues(cart);
    // Update values in cart with array
    this.populateCart(cart);
    // Show cart when clicked from nav
    cartBtn.addEventListener('click', this.showCart);
    // Click X to hide cart
    closeCartBtn.addEventListener('click', this.hideCart)
   }

   // If items then put in addCartItem for display
   populateCart(cart){
    cart.forEach(item => this.addCartItem(item));
  }

  // Remove classes to hide the cart
  hideCart(){
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
   }

   // Due to accessing in class, need () => then 'this' 
   cartLogic(){
    clearCartBtn.addEventListener('click', () => {
      this.clearCart();
    })
    // cart functionality //
    cartContent.addEventListener('click', event => {
      // remove is clicked then will remove item from cart
      console.log("In Cart Content");
      console.log(event.target);
      if(event.target.classList.contains('remove-item')){
        let removeItem = event.target;
        // Get id for correct item
        let id = removeItem.dataset.id;
        // Have to remove parent's parent from DOM
        cartContent.removeChild(removeItem.parentElement.parentElement);
        // Removed item by id
        this.removeItem(id);
      }
      // Up button is clicked 1) updated amount 2) save to local storage
      else if (event.target.classList.contains('fa-chevron-up')){
        let addAmount = event.target;

        // Grab ID
        let id = addAmount.dataset.id;
        // Find item by id
        let tempItem = cart.find(item => item.id === id);
        console.log(tempItem, "TEMP ITEM");
        // save amount in temp
        tempItem.amount = tempItem.amount + 1;
        // Save cart info in local storage
        Storage.saveCart(cart);

        this.setCartValues(cart);
        // Update the value
        addAmount.nextElementSibling.innerText = tempItem.amount;

        console.log(addAmount.nextElementSibling.innerText);
        console.log(tempItem.amount);
      }
      else if (event.target.classList.contains('fa-chevron-down')){
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find(item => item.id === id);
         // save amount in temp
         tempItem.amount = tempItem.amount - 1;
        
         // 
        if(tempItem.amount > 0){
         Storage.saveCart(cart);
         this.setCartValues(cart);
         lowerAmount.previousElementSibling.innerText = tempItem.amount;
        }
        // If '0' then remove from cart
        else {
         cartContent.removeChild(lowerAmount.parentElement.parentElement);
         this.removeItem(id);
        }
      }
    })
  }

  clearCart(){
    // Grab the id's from the cart and put in to an array
   let cartItems = cart.map(item => item.id);
   // Given array of id's now remove them
   cartItems.forEach(id => this.removeItem(id));
   // Any children will keep removing until none
   while(cartContent.children.length > 0){
     cartContent.removeChild(cartContent.children[0]);
   }
   // After removing children then hide cart
   this.hideCart();
  }


  removeItem(id){
    // If Id's are the same as in cartItems array, then remove them
    cart = cart.filter(item => item.id !== id);
    // Set new values after filter
    this.setCartValues(cart);
    // Save cart values to local storage
    Storage.saveCart(cart);
    // Grab the specific button 
    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
  }

  getSingleButton(id){
    // Will grab specific button
    return buttonsDOM.find(button => button.dataset.id === id);
  }
};


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

  // Setup app
  ui.setupAPP();


  // get all artists data
  art.getAllArtwork().then(
    artistsObject => {
      // Use random number generator to pick random artist
      let randomArtistObject = ui.getRandomArtist(artistsObject);

      // display random artists in gallery
      ui.displayArtwork(randomArtistObject);

      // display specific artist selected by user
      ui.getSpecificArtist(artistsObject);

      // Save to local Storage
      Storage.saveArt(artistsObject);

      // display search card given user input
      searchBar.searchBarUserInput(artistsObject);
  
    }).then(() => {
      ui.getBagButtons();
      ui.cartLogic();
    })
  });


// local storage
/* saving in local storage */
class Storage {
  static saveArt(allArt){
    // Save all data in local storage
    localStorage.setItem("allArt", JSON.stringify(allArt));
  }

  static getArt(id){
    // Get all data from local storage
    let allArt = JSON.parse(localStorage.getItem('allArt'));
    let artFound; 

    // Check to see if ID matches
    allArt.forEach(artist => {
      let artwork = artist.art;
      // artwork.forEach(art => return art.find(isIDMatch))
      artwork.forEach(art => {
         //If ID's do match then save variable
          if(art.id == id){
            artFound = art;
          }
      })
    })
    // return correct art information
    return artFound;
  }
  // Save cart info to local storage
  static saveCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  // Get cart info from local storage
  static getCart() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [];
  }
}
