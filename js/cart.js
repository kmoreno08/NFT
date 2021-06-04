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




// cart array
let cart = [];
 // buttons array
 let buttonsDOM = [];


// getting the art
class Art {
 
 async getAllArtwork(){
   // fetch data of all artwork
   let result = await fetch('../data/data.json');
   // json to js
   let data = await result.json()
   // save all artist
   let artists = data.artist;

   // Use random number generator to pick random artist
   let artist = getRandomArtist(artists);
   // Save artist artwork information
   /////////////////////
   let artistInfo = artist.art.map(art => {
     const id = art.id;
     const title = art.name;
     const price = art.price;
     const image = art.imgLocation;
     return {id, title, price, image};
   })
   //////////////////////
   // save the artist name
   let artistName = artist.name

   
  //  this.displayRandomArtist(artist);
  displayRandomArtist(artistInfo, artistName);
  //  return artist

 
   function displayRandomArtist(artistInfo, artistName){
    const ui = new UI();
    console.log("/////////////")
    console.log(artistInfo);
    ui.displayArtwork(artistInfo, artistName)
    //  artistInfo.forEach(art => {
     
    //    console.log(art.title);
    //    console.log(artistInfo);
    //    console.log(artistName);
    //    console.log("******************");
    //    ui.displayArtwork(art, artistName)

    //  })
   }
 

  function getRandomArtist(artists){
    let artistNumber = getRandomInt(artists.length);
    console.log(artistNumber);
    let artist = artists[artistNumber];
    return artist;
    
  }
  // let artist = artists[artistNumber];
  // console.log(artist);
  // console.log(artist.art);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



  //  artists.forEach(artist => {
  //    console.log(artist);
  //  })


  
   return artists;
    // artists = artists.map(item => {
    //   console.log(item);
    // })
    // Artists is destructured
  //  products = products.map(item => {
  //    const {title, price} = item.fields;
  //    const {id} = item.sys;
  //    const image = item.fields.image.fields.file.url;
  //    return {title, price, id, image};
  //  })
  //  return products;
 } catch (error){
   console.log(error);
 }

 displayRandomArtist(artists){
    console.log("In display Random");

}
}

class UI {
  // displays artwork for a given an artist
  displayArtwork(art, artistName){
    let galleryCardInnerHTML = "";
    let result = "";
    
    // loop through the artwork for specific artist

    art.forEach(art => {
      // save html of each artwork in variable
      result += `<div class="gallery-card">
      <div class="gallery-text">
        <div class="gallery-name">${art.title}</div>
        <div class="gallery-artist">${artistName}</div>
      </div>
      <img src=${art.image}>
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
    // 
    // galleryCardInnerHTML = result;
    // Display front page
    galleryWrapperCard.innerHTML = result; 
  }


  // displayRandomArtist(artists){
    
  // }
}


var test = new Art();
test.getAllArtwork();


// display products
// class UI {
//   displayProducts(products){
//     let result = "";
//     products.forEach(product => {
//       result += ``
//     })
//   }
// }

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