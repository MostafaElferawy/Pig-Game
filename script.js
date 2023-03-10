// 'use strict';

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(
//         `current--${activePlayer}`
//       ).textContent = currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);


const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// const current1 = document.querySelector('#current--0');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');


let currentNum = 0;
let activePlayer = 0;
let scores = [0, 0];

const init = () =>{
// player0El.textContent = 0;
// player1El.textContent = 0;
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

diceImg.src= 'dice-5.png';

document.querySelector('.win').classList.add('hidden');
  // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
  // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  // document.querySelector(`.player--0`).classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  btnHold.classList.remove('hidden')///
  btnRoll.classList.remove('hidden')///
 diceImg.classList.remove('hidden')///
}

const changePlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentNum = 0 ;
    activePlayer = activePlayer === 0 ? 1: 0;
    // currentNum += diceNum
    // console.log(currentNum)
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click', ()=>{
  // change dice img
  let diceNum = Math.trunc(Math.random()*6) + 1 ;
  // console.log(diceNum)
  diceImg.src = `dice-${diceNum}.png`;

  // if diceNum = 1, switch to another player
  if(diceNum === 1){
    // switch to another player
    changePlayer()

  }else{

    // updute current value 
    currentNum += diceNum
    document.getElementById(`current--${activePlayer}`).textContent = currentNum;
  }
})

btnHold.addEventListener('click', ()=>{

// 1. Add current score to active player's score
// console.log('hold')
scores[activePlayer] += currentNum;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

// check if score >= 100, then player wins
if (scores[activePlayer] >= 100) {
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  document.querySelector('.win').classList.remove('hidden')
  diceImg.classList.add('hidden')///
  btnHold.classList.add('hidden')///
  btnRoll.classList.add('hidden')///
  
  document.querySelector('.win').textContent=`player ${activePlayer + 1} wins ????`
}

//switch to another player
changePlayer()

})



btnNew.addEventListener('click', () =>{
init()
})