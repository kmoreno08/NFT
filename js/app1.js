// https://www.youtube.com/watch?v=023Psne_-_4&t=6710s

// // Variables
// const cartBtn = document.querySelector(".cart__btn");
// const closeCartBtn = document.querySelector(".cart__close");
// const clearCartBtn = document.querySelector(".cart__clear");
// const cartDOM = document.querySelector(".cart");
// const cartOverlay = document.querySelector(".cart__overlay");
// const cartItems = document.querySelector(".cart__items");
// const cartTotal = document.querySelector(".cart__content");
// const cartContent = document.querySelector(".cart__content")
// const productsDOM = document.querySelector(".products-center");


// // cart
// let cart = [];
// // buttons
// let buttonsDOM = [];


// // getting the art
// class Products {
//  async getProducts(){
//    // create json with artwork
//    let result = await fetch('products.json');
//    let data = await result.json()
//    let products = data.items;
//    products = products.map(item => {
//      const {title, price} = item.fields;
//      const {id} = item.sys;
//      const image = item.fields.image.fields.file.url;
//      return {title, price, id, image};
//    })
//    return products;
//  } catch (error){
//    console.log(error);
//  }
// }

// // display products
// class UI {
//   displayProducts(products){
//     let result = "";
//     products.forEach(product => {
//       result += `<div class="gallery-card">
//       <div class="gallery-text">
//         <div class="gallery-name">${artName}</div>
//         <div class="gallery-artist">${artist}</div>
//       </div>
//       <img src=${location}>
//       <button class="bag-btn" data-id=${artId}>
//             <i class="fas fa-shopping-cart"></i>
//             add to cart
//           </button>
//           <button class="eth-btn" >
//             ${amount} Eth
//             <i class="fab fa-ethereum fa-lg"></i>
//           </button>
//     </div>`
//     });
//     productsDOM.innerHTML = result;
//   }


//   getBagButtons(){
//     const buttons = [...document.querySelectorAll(".bag-btn")];
//     buttonsDOM = buttons;
//     button.forEach(button => {
//       // will return id's
//       let id = button.dataset.id;
//       let inCart = cart.find(item => item.id === id);
//       if(inCart){
//         button.innerText = "In Cart";
//         button.disabled = true;
//       }
//         button.addEventListener('click', (event) => {
//           // Changes from add to bag to in cart
//           event.target.innerText = "In Cart";
//           // Disable in cart button
//           event.target.disabled = true;
//           // get product from productsDOM
//           let cartItem = {...Storage.getProduct(id), amount:1};
//           // add product to the cart
//           cart = [...cart, cartItem];
//           // save cart in local Storage
//           Storage.saveCart(cart);
//           // set cart values
//           this.setCartValues(cart);
//           // display the cart items
//           this.addCartItem(cartItem);
//           // show the cart 
//           this.showCart();
//         })
//     })
//   }
//   setCartValues(cart){
//     let tempTotal = 0;
//     let itemsTotal = 0;
//     cart.map(item => {
//       tempTotal += item.price * item.amount;
//       itemsTotal += item.amount;
//     })
//     // Total amount to two decimal
//     cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
//     cartItems.innerText = itemsTotal;
//   }

//   addCartItem(item){
//     const div = document.createElement('div');
//     div.classList.add('cart-item');
//     div.innerHTML = `<img src="${item.image}" alt="art"/>
//     <div>
//       <h4>${item.title}</h4>
//       <h5>${item.price} Eth</h5>
//       <span class="remove-item" data-id=${item.id}>remove</span>
//     </div>
//     <div>
//       <i class="fas fa-chevron-up" data-id=${item.id}></i>
//       <p id="item-amount">${item.amount}</p>
//       <i class="fas fa-chevron-down" data-id=${item.id}></i>
//     </div>`;
//     cartContent.appendChild(div);
//   }
//    showCart(){
//     cartOverlay.classList.add('transparentBcg');
//     cartDOM.classList.add('showCart');
//    }
//    setupAPP(){
//     cart = Storage.getCart();
//     this.setCartValues(cart);
//     this.populateCart(cart);
//     // Show cart when clicked from nav
//     cartBtn.addEventListener('click', this.showCart);
//     // Click X to hide cart
//     closeCartBtn.addEventListener('click', this.hideCart)
//    }
//    populateCart(cart){
//      cart.forEach(item => this.addCartItem(item));
//    }

//    hideCart(){
//     cartOverlay.classList.remove("transparentBcg");
//     cartDOM.classList.remove("showCart");
//    }

//    // Due to accessing in class, need () => then 'this' 
//    cartLogic(){
//      clearCartBtn.addEventListener('click', () => {
//        this.clearCart();
//      })
//      // cart functionality
//      cartContent.addEventListener('click', event => {
//        // remove is clicked then will remove item from cart
//        if(event.target.classList.contains('remove-item')){
//          let removeItem = event.target;
//          // Get id for correct item
//          let id = removeItem.dataset.id;
//          // Have to remove parent's parent from DOM
//          cartContent.removeChild(removeItem.parentElement.parentElement);
//          // Removed item by id
//          this.removeItem(id);
//        }
//        // Up button is clicked 1) updated amount 2) save to local storage
//        else if (event.target.classList.contains('fa-chevron-up')){
//          let addAmount = event.target;
//          let id = addAmount.dataset.id;
//          // Find item by id
//          let tempItem = cart.find(item => item.id === id);
//          // save amount in temp
//          tempItem.amount = tempItem.amount + 1;
//          // Save in storage
//          Storage.saveCart(cart);
//          this.setCartValues(cart);
//          // Update the value
//          addAmount.nextElementSibling.innerText = tempItem.amount;
//        }
//        else if (event.target.classList.contains('fa-chevron-down')){
//          let lowerAmount = event.target;
//          let id = lowerAmount.dataset.id;
//          let tempItem = cart.find(item => item.id === id);
//           // save amount in temp
//           tempItem.amount = tempItem.amount - 1;
         
//           // 
//          if(tempItem.amount > 0){
//           Storage.saveCart(cart);
//           this.setCartValues(cart);
//           lowerAmount.previousElementSibling.innerText = tempItem.amount;
//          }
//          // If '0' then remove from cart
//          else {
//           cartContent.removeChild(lowerAmount.parentElement.parentElement);
//           this.removeItem(id);
//          }
//        }
//      })
//    }

//    clearCart(){
//      // Grab the id's from the cart and put in to an array
//     let cartItems = cart.map(item => item.id);
//     // Given array of id's now remove them
//     cartItems.forEach(id => this.removeItem('id'));
//     // Any children will keep removing until none
//     while(cartContent.children.length > 0){
//       cartContent.removeChild(cartContent.children[0]);
//     }
//     // After removing children then hide cart
//     this.hideCart();
//    }
//    removeItem(id){
//      // If Id's are the same as in cartItems array, then remove them
//      cart = cart.filter(item => item.id !== id);
//      this.setCartValues(cart);
//      Storage.saveCart(cart);
//      let button = this.getSingleButton(id);
//      button.disabled = false;
//      button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
//    }

//    getSingleButton(id){
//      // Will grab specific button
//      return buttonsDOM.find(button => button.dataset.id === id);
//    }
// }

// // local storage
// /* saving in local storage */
// class Storage {
//   static saveProducts(products){
//     localStorage.setItem("products", JSON.stringify(products));
//   }

//   static getProduct(id){
//     // return the array in local storage
//     let products = JSON.parse(localStorage.getItem('products'));
//     // will return if id matches
//     return products.find(product => products.id === id)
//   }
//   static saveCart(cart){
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }
//   static getCart() {
//     return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [];
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("App has loaded instead");
//   const ui = new UI();
//   const products = new Products();

//   // setup app
//   ui.setupAPP();

//   // get all products
//   products.getProducts().then(products => {
//     // display all products
//     ui.displayProducts(products);
//     // Then save to local storage
//   Storage.saveProducts(products);
//   }).then(()=> {
//     ui.getBagButtons();
//     ui.cartLogic();
//   });
// })