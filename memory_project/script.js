const flagUrl = "https://restcountries.com/v3.1/all";
const harryUrl = "https://hp-api.onrender.com/api/characters";
const catUrl = "https://api.thecatapi.com/v1/images/search?limit=10";
const buttonContainer = document.querySelector(".button-container")
const cardSet = document.getElementById("card-set");

let picArr = ["", "", "", "", "", ""]

buttonContainer.addEventListener('click', function (e) {

  if (e.target.classList.contains('random-button')) {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    if (randomNum == 1) {
      fetchCats();
    }
    else if (randomNum == 2) {
      fetchHarry();
    }
    else if (randomNum == 3) {
      fetchFlags();
    }
  }


  if (e.target.classList.contains('cats-button')) {
    fetchCats();
  }
  if (e.target.classList.contains('harry-button')) {
    fetchHarry();
  }
  if (e.target.classList.contains('flags-button')) {
    fetchFlags();
  }
})


function fetchCats() {
  fetch(catUrl)
    .then(response => response.json())
    .then(data => {

      // picArr.forEach((pic,index) =>{



      //   pic=data[index].url
      //   console.log("pic "+  pic);
      //   console.log("index "+index);
      // })
      // console.log(picArr);

      for (let i = 0; i < 6; i++) {
        picArr[i] = data[i].url;
      }
      cardSet.innerText = "cats"
      cardSet.className = 'text-info'
      setBoard();
    })
}
function fetchHarry() {
  fetch(harryUrl)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < 6; i++) {
        picArr[i] = data[i].image;
      }
      cardSet.innerText = "harry potter"
      cardSet.className = 'text-danger'
      setBoard();
    })

}
function fetchFlags() {
  fetch(flagUrl)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < 6; i++) {
        picArr[i] = data[i].flags.png;
      }
      cardSet.innerText = "flags"
      cardSet.className = 'text-success'
      setBoard();
    })
}



function setBoard() {// will change the board based on which button was pressed

  document.querySelector(".memory-game").innerHTML =
    // using this pic as backsize of the cards because it makes me laugh
    ` <div class="memory-card" data-framework="pic1">
              <img class="front-face" src="${picArr[0]}" alt="1st pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="1st Badge" />
              </div>
          <div class="memory-card" data-framework="pic1">
              <img class="front-face" src="${picArr[0]}" alt="1st pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="1st Badge" />
          </div>
  
          <div class="memory-card" data-framework="pic2">
              <img class="front-face" src="${picArr[1]}" alt="2nd pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="2nd Badge" />
          </div>
          <div class="memory-card" data-framework="pic2">
              <img class="front-face" src="${picArr[1]}" alt="2nd pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="2nd Badge" />
          </div>
  
          <div class="memory-card" data-framework="pic3">
              <img class="front-face" src="${picArr[2]}" alt="3rd pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="3rd Badge" />
          </div>
          <div class="memory-card" data-framework="pic3">
              <img class="front-face" src="${picArr[2]}" alt="3rd pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="3rd Badge" />
          </div>
  
          <div class="memory-card" data-framework="pic4">
              <img class="front-face" src="${picArr[3]}" alt="4th pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="4th Badge" />
          </div>
          <div class="memory-card" data-framework="pic4">
              <img class="front-face" src="${picArr[3]}" alt="4th pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="4th Badge" />
          </div>
  
          <div class="memory-card" data-framework="pic5">
              <img class="front-face" src="${picArr[4]}" alt="5th pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="5th Badge" />
          </div>
          <div class="memory-card" data-framework="pic5">
              <img class="front-face" src="${picArr[4]}" alt="5th pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="5th Badge" />
          </div>
  
          <div class="memory-card" data-framework="pic6">
              <img class="front-face" src="${picArr[5]}" alt="6th pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="6th Badge" />
          </div>
          <div class="memory-card" data-framework="pic6">
              <img class="front-face" src="${picArr[5]}" alt="6th pic" />
              <img class="back-face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gCnKG0BsbRwLL_igIj9-Tza2AwlRkJzGg&s" alt="6th Badge" />
          </div>
  `



  // Select all the cards from the HTML file
  const cards = document.querySelectorAll(".memory-card");


  // Flag for letting us know if a card already been fliped
  let hasFlippedCard = false;

  // Flag for locking the borad when two cards been fliped
  // Prevent us from flipping more cards when our app calculte the results
  let lockBoard = false;

  // Variables for saving the current card selections after the user choosed to flip them
  let firstCard, secondCard;

  // function for fliping the card
  function flipCard() {
    // We don't allow to flip the card if the lockBoard is true
    if (lockBoard) return;
    // We don't allow to flip the card if we already flipped this card
    if (this === firstCard) return;

    // adding the class flip to the selected card
    this.classList.add("flip");

    // If we don't already fliped a card (first card been fliped)
    if (!hasFlippedCard) {
      // Flag to true -> flipped a card and save to firstCard the seleceted card
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    // If we already fliped a card (second card been fliped)
    // save to secondCard the seleceted card
    secondCard = this;
    // Call checkForMatch() method to see if cards are matched
    checkForMatch();
  }

  function checkForMatch() {
    // dataset will contain all the HTML properties that has "data-{name}"
    // we can get those properties by calling element.dataset.{name}
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    // if the dataset name of the two cards is the same -> we will call disableCards()
    // else -> we will call unflipCards()
    isMatch ? disableCards() : unflipCards();
  }

  // Function that will make sure that we can't flip the cards again in the game
  // the fucntion is removing the eventListener for "click" from both cards
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    // we should call reset to make sure that the user can now chose again two cards
    resetBoard();
  }

  // Function that will unflip the selected cards incase they are not matched
  function unflipCards() {
    // during the unflip time we don't want to allow the user to flip other cards
    // so lockBoard should be true
    lockBoard = true;

    // the unflip functionality is by removing the "flip" class from both cards and reset the board
    // we want to start this logic only 1.5 seconds after the unflipCards() was triggered
    // because if we won't do it our app will imedietly flip the cards before we will be able to see it
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1500);
  }

  // Function that should reset all flags back to false and all card variables back to null
  function resetBoard() {
    // [hasFlippedCard, lockBoard] = [false, false];
    hasFlippedCard = false;
    lockBoard = false;
    // [firstCard, secondCard] = [null, null];
    firstCard = null;
    secondCard = null;
  }

  // This function shuffles the cards
  // we are calling this fucntion imidietly when the game start and this is why we have () in the end of the function
  (function () {
    cards.forEach((card) => {
      // create a random number between 0 - 11
      let randomPos = Math.floor(Math.random() * 12);
      // The order property specifies the order of a flexible item relative to the rest of the flexible items inside the same container.
      // If we will get the same number we will position it next to the previus card that got the same number
      card.style.order = randomPos;
    });
  })();



  // we will add a "click" event listener that will trigger flipCard on every card element
  cards.forEach((card) => card.addEventListener("click", flipCard));
}
fetchCats();
//when the site first launches itll be on cats





