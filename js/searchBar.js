


// data
let dataArt = {
  chris_lizarraga: [
    {art: 'Even shadows', 
    artist: "Chris Lizarraga",
    amount: 10, 
    location: '../img/artist/chris_lizarraga/even_shadows.png',},
    {art: 'Kinetic',
    artist: "Chris Lizarraga",
    amount: 20,
    location: "../img/artist/chris_lizarraga/kinetic.jpg"},
   {art: "The new normal",
   artist: "Chris Lizarraga",
   amount: 12, 
   location: "../img/artist/chris_lizarraga/the_new_normal.jpg"},
   {art: "Trapped",
   artist: "Chris Lizarraga",
   amount: 13, 
   location: "../img/artist/chris_lizarraga/trapped.jpg"},
  ],

  dean_and_james: [
    {art: "A window of opportunity",
    artist: "Dean and James",
    amount: 30,
    location: "../img/artist/dean_and_james/a_window_of_opportunity.jpg"},
    {art: "Facing reality",
    artist: "Dean and James",
    amount: 11,
    location: "../img/artist/dean_and_james/facing_reality.jpg"},
    {art: "The storm",
    artist: "Dean and James",
    amount: 12,
    location: "../img/artist/dean_and_james/the_storm.jpg"}
  ],
   
  florian_eyemann: [
    {art: "Flowers",
    artist: "Florian Eyemann",
    amount: 10,
    location: "../img/artist/florian_eyemann/flowers.jpg"},
    {art: "Portait",
    artist: "Florian Eyemann",
    amount: 17,
    location: "../img/artist/florian_eyemann/portait.jpg"},
    {art: "Skulls",
    artist: "Florian Eyemann",
    amount: 45,
    location: "../img/artist/florian_eyemann/skulls.jpg"}
  ],

  jason_sims: [
    {art: "3ft rise",
    artist: "Jason Sims",
    amount: 20,
    location: "../img/artist/jason_sims/3ft_rise.jpg"},
    {art: "4ft stack",
    artist: "Jason Sims",
    amount: 28,
    location: "../img/artist/jason_sims/4ft_stack.jpg"},
    {art: "Dual six",
    artist: "Jason Sims",
    amount: 30,
    location: "../img/artist/jason_sims/dual_vi.jpg"},
    {art: "Light break nexus",
    artist: "Jason Sims",
    amount: 33,
    location: "../img/artist/jason_sims/light_break--nexus.jpg"},
    {art: "On the horizon two",
    artist: "Jason Sims",
    amount: 10,
    location: "../img/artist/jason_sims/on_the_horizon_II.jpg"},
    {art: "On the horizon arch",
    artist: "Jason Sims",
    amount: 35,
    location: "../img/artist/jason_sims/on_the_horizon--arch.jpg"}
  ],

  joseph_klibansky: [
    {art: "Self portrait of a dreamer",
    artist: "Joseph Klibansky",
    amount: 18,
    location: "../img/artist/joseph_klibansky/self_portrait_of_a_dreamer.jpg"},
    {art: "Take me to paradise",
    artist: "Joseph Klibansky",
    amount: 11,
    location: "../img/artist/joseph_klibansky/take_me_to_paradise.jpg"},
    {art: "The thinker",
    artist: "Joseph Klibansky",
    amount: 16,
    location: "../img/artist/joseph_klibansky/the_thinker.jpg"}
  ],

  katya_zvereva: [
    {art: "California",
    artist: "Katya Zvereva",
    amount: 10,
    location: "../img/artist/katya_zvereva/california.jpg"},
    {art: "Dreamer",
    artist: "Katya Zvereva",
    amount: 19,
    location: "../img/artist/katya_zvereva/dreamer.jpg"},
    {art: "Seeker",
    artist: "Katya Zvereva",
    amount: 12,
    location: "../img/artist/katya_zvereva/seeker.jpg"}
  ],

  mary_ronayne: [
    {art: "Bennie doyle",
    artist: "Mary Ronayne",
    amount: 12,
    location: "../img/artist/mary_ronayne/bennie_doyle.jpg"},
    {art: "Liverpool wedding",
    artist: "Mary Ronayne",
    amount: 13,
    location: "../img/artist/mary_ronayne/liverpool_wedding.jpg"},
    {art: "The darlington",
    artist: "Mary Ronayne",
    amount: 19,
    location: "../img/artist/mary_ronayne/the_darlington.jpg"},
  ],

  tian_yonghua: [
    {art: "Mascot",
    artist: "Tian Yonghua",
    amount: 15,
    location: "../img/artist/tian_yonghua/mascot.jpg"},
    {art: "Touch",
    artist: "Tian Yonghua",
    amount: 15,
    location: "../img/artist/tian_yonghua/touch.jpg"},
    {art: "Virtual mirror",
    artist: "Tian Yonghua",
    amount: 12,
    location: "../img/artist/tian_yonghua/virtual_mirror.jpg"},
    {art: "Wave 2",
    artist: "Tian Yonghua",
    amount: 19,
    location: "../img/artist/tian_yonghua/wave_2.jpg"}
  ]
};






// Modal - search bar  /////////////
// 

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
// Listen for open click
searchBox.addEventListener("click", openModal);
// Listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for clear button
clearBtn.addEventListener("click", clearTextBox);
// Function to clear text box
function clearTextBox() {
  modalSearchBox.value = " ";
  clearSearchBar();
}
// Function to open modal
function openModal() {
  modal.style.display = "block";
}
// Function to close modal
function closeModal() {
  modal.style.display = "none";
  clearTextBox();
}



// Empty name array
const nameArray = [];
    /* 
   Listener for when user types in to modalSearchBox
   Each key input will run artistInfo
   */
modalSearchBox.addEventListener("input", () =>
  artistInfo(modalSearchBox.value)
);


// Create array for name of artists
const artistArray = ["chris lizarraga", "dean and james", "florian eyemann", "jason sims", "joseph klibansky", "katya zvereva", "tian yonghua"];


// Create empty array for artwork names
const artNameArray = [];
// add Chris's art to allArtArray
chrisArtLength = dataArt.chris_lizarraga.length;
for(let i = 0; i < chrisArtLength; i++){
  let artName = dataArt.chris_lizarraga[i].art;
  artNameArray.push(artName);
}
// add Dean and James art to allArtArray
deanAndJamesLength = dataArt.dean_and_james.length;
  for(let i = 0; i < deanAndJamesLength; i++){
    let artName = dataArt.dean_and_james[i].art;
    artNameArray.push(artName);
  }

  // add florian eyemann's art to allArtArray
  florianEyemannLength = dataArt.florian_eyemann.length;
  for(let i = 0; i < florianEyemannLength; i++){
    let artName = dataArt.florian_eyemann[i].art;
    artNameArray.push(artName);
  }

  // add Jason sims art to allArtArray
  jasonSimsLength = dataArt.jason_sims.length;
  for(let i = 0; i < jasonSimsLength; i++){
    let artName = dataArt.jason_sims[i].art;
    artNameArray.push(artName);
  }

  // add Joseph Klibansky's art to allArtArray
  josephKlibanskyLength = dataArt.joseph_klibansky.length;
  for(let i = 0; i < josephKlibanskyLength; i++){
    let artName = dataArt.joseph_klibansky[i].art;
    artNameArray.push(artName);
  }

  // add Katya Zvereva's art to allArtArray
  katyaZverevaLength = dataArt.katya_zvereva.length;
  for(let i = 0; i < katyaZverevaLength; i++){
    let artName = dataArt.katya_zvereva[i].art;
    artNameArray.push(artName);
  }

  // add Mary Ronayne's art to allArtArray
  maryRonayneLength = dataArt.mary_ronayne.length;
  for(let i = 0; i < maryRonayneLength; i++){
    let artName = dataArt.mary_ronayne[i].art;
    artNameArray.push(artName);
  }

  // add Tian Yonghua's art to allArtArray
  tianYonghuaLength = dataArt.tian_yonghua.length;
  for(let i = 0; i < tianYonghuaLength; i++){
    let artName = dataArt.tian_yonghua[i].art;
    artNameArray.push(artName);
  }


// Add art name array (allArtArray) and artists array (artistArray) to same array
searchArtArray = artNameArray.concat(artistArray);


   /* 
    check Each match in searchbar will 
     check against the searchArtArray and find
     any matches. If there are matches then will be saved in the
     to the matches array.
      **Side Note: update algo to account for spaces **
   */
function artistInfo(searchText){
  console.log(searchText);
  // Filter names and return matches
  let matches = searchArtArray.filter((name) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return name.match(regex);
  })


  // To Show results in search bar modal
  let searchCardInnerHTML = "";
 
  /* 
    Going through each index in matches and finding the
     correct data to display in matchList
  */
  matches.forEach((artName) => 
  {
    // Find correct image location for the art
   let imgLocation = findArtLocation(artName);
   // Find correct artist name for the art
   let artistName = findArtist(artName);
   // Find correct Ethereum amount for the art
   let ethAmount = findEthAmount(artName);

    /* 
    Undefined should only be when artist is a result from the search 
    instead of artwork name. 
    */
   // undefined if artist profile - default artist icon
   if (imgLocation == undefined){
    imgLocation = "../img/icon/artist.png";
   }
   // undefined if artist profile - check full gallery
   if (artistName == undefined){
     artistName = "Check Gallery";
   }

   // undefined if artist profile - no amount for artist
   if (ethAmount == undefined){
    ethAmount = "";
  }
  
    // input correct data with html and css
    // Change on mouse down to correct function <------------------
    searchCardInnerHTML += `
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
        <h5>${ethAmount}</h5>
    </div>
  </div>`;

  });
  // add to html for display
  matchList.innerHTML = searchCardInnerHTML;
  };

// Return Art image location
  function findArtLocation(artName){
    let location;
    // for loop in data object
  for(let key in dataArt){
    let value = dataArt[key];
    for(let i = 0; i < value.length; i++){
     // check if art name matches art name in object
      if(artName == value[i].art){
        // return location of image
        location = value[i].location;
        return location
      }
    }
}
  };


  // Return artist name
  function findArtist(artName){
    let artist;
    // for loop in data object
  for(let key in dataArt){
    let value = dataArt[key];
    for(let i = 0; i < value.length; i++){
     // check if art name matches art name in object
      if(artName == value[i].art){
        // return artist name
        artist = value[i].artist;
        return artist;
      }
    }
}
  };

  // Return Eth amount
  function findEthAmount(artName){
    let amount;
    // for loop in data object
  for(let key in dataArt){
    let value = dataArt[key];
    for(let i = 0; i < value.length; i++){
     // check if art name matches art name in object
      if(artName == value[i].art){
        // return artist name
        amount = value[i].amount;
        return amount;
      }
    }
}
  };
