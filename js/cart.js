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

//  getSpecificArtist(artist){
//    console.log("MADE IT IN HERE AND IT DIDNT BREAK");
//  }

}



  //  // Use random number generator to pick random artist
  //  let artist = getRandomArtist(artists);
   // Save artist artwork information
   /////////////////////
  //  let artistInfo = artist.art.map(art => {
  //    const id = art.id;
  //    const title = art.name;
  //    const price = art.price;
  //    const image = art.imgLocation;
  //    return {id, title, price, image};
  //  })
   //////////////////////
  //  // save the artist name
  //  let artistName = artist.name

   
  // //  this.displayRandomArtist(artist);
  // displayRandomArtist(artistInfo, artistName);
  //  return artist

 
  //  function displayRandomArtist(artistInfo, artistName){
  //   const ui = new UI();
  //   console.log("/////////////")
  //   console.log(artistInfo);
  //   ui.displayArtwork(artistInfo, artistName)
  //  }
 

  // function getRandomArtist(artists){
  //   let artistNumber = getRandomInt(artists.length);
  //   console.log(artistNumber);
  //   let artist = artists[artistNumber];
  //   return artist;
  // }


  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }

// }
  
  //  return artists;
//  } catch (error){
//    console.log(error);
//  }

//  displayRandomArtist(artists){
//     console.log("In display Random");

// }
// }

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

  getSpecificArtist(artist){
    console.log("This works");
  }
}

//   // display random artist 
//   displayRandomArtist(artistInfo){
    
//     this.displayArtwork(artistInfo)
//    }
// }


// var test = new Art();
// test.getAllArtwork();


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
      ui.getSpecificArtist(randomArtistObject);

      // sellerChrisLizarraga.addEventListener("click", function (){
      //   emptyGallery();
      //   addChrisLizarragaArt();
      // });
    }
  );
  // let artists = dataObject.artists;
  // console.log(artists);
  // console.log("==++++++++");
  // console.log(dataObject);

    //  this.displayRandomArtist(artist);
    // displayRandomArtist(artistInfo, artistName);

     // save the artist name
  //  let artistName = artist.name

   // Use random number generator to pick random artist
  //  let artist = getRandomArtist(artists);
  
})

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