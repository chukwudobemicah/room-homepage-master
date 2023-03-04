// import { rpsLogic } from './rpslogic.js';
const rulesBtn = document.querySelector('.rules');
const rulesContainer = document.querySelector('.rules-container');
const cancel = document.querySelector('.cancel');
const paper = document.querySelector('.rps__container-paper');
const scissors = document.querySelector('.rps__container-scissors');
const rock = document.querySelector('.rps__container-rock');
const rps = document.querySelectorAll('.rps');
const you = document.querySelector('.you');
const playAgain = document.querySelector('.play-again');
const userPick = document.querySelector('.user-pick');
const housePick = document.querySelector('.house-pick');
const firstChoice = document.querySelector('#first-choice');
const secondChoice = document.querySelector('#second-choice');
const thirdChoice = document.querySelector('#third-choice');
const score = document.querySelector('#score');
console.log(userPick, housePick);
// +score.textContent;

console.log(+score.textContent);
// show rules
rulesBtn.addEventListener('click', function () {
  rulesContainer.classList.toggle('hidden');
  rulesContainer.classList.remove('scale-down');
  rulesContainer.classList.toggle('scale-up');
});
// remove rules
cancel.addEventListener('click', function () {
  rulesContainer.classList.remove('scale-up');
  rulesContainer.classList.add('scale-down');
  setTimeout(() => rulesContainer.classList.add('hidden'), 250);
});
// when yo click on a rps

rps.forEach(el => {
  el.addEventListener('click', function () {
    const userPick = document.querySelector('.user-pick');
    const housePick = document.querySelector('.house-pick');
    // get user value
    const userValue = el.getAttribute('data-value');
    // input user value
    const firstMarkUp = ` <div data-value="${userValue}" class="rps__container-${userValue} rps">
      <p><img src="/images/icon-${userValue}.svg" alt="${userValue}"></p><div class="user-pick hidden">You Picked</div>
      </div>`;
    console.log(userValue);
    firstChoice.innerHTML = '';
    firstChoice.insertAdjacentHTML('beforeend', firstMarkUp);
    thirdChoice.classList.add('hidden');
    userPick.classList.remove('hidden');

    //  computer pick
    // get computer value
    const valueNum = el.getAttribute('data-num');
    let ComputerValue;
    const randomNum = Math.trunc(Math.random() * 3) + 1;
    if (randomNum === 1) {
      ComputerValue = 'paper';
    } else if (randomNum === 2) {
      ComputerValue = 'scissors';
    } else {
      ComputerValue = 'rock';
    }
    console.log(ComputerValue);
    console.log(randomNum);
    // input computer value
    const secondMarkUp = ` <div data-value="${ComputerValue}" class="rps__container-${ComputerValue} rps">
        <p><img src="/images/icon-${ComputerValue}.svg" alt="${ComputerValue}"></p><div class="house-pick hidden">House Picked</div>
        </div>`;

    const rpsLogic = function () {
      if ((userValue === 'paper') & (ComputerValue === 'scissors')) {
        you.textContent = 'you lose';
      }
      if ((userValue === 'paper') & (ComputerValue === 'rock')) {
        you.textContent = 'you win';
      }
      if ((userValue === 'paper') & (ComputerValue === 'paper')) {
        you.textContent = 'draw';
      }
      if ((userValue === 'rock') & (ComputerValue === 'scissors')) {
        you.textContent = 'you win';
      }
      if ((userValue === 'rock') & (ComputerValue === 'paper')) {
        you.textContent = 'you lose';
      }
      if ((userValue === 'rock') & (ComputerValue === 'rock')) {
        you.textContent = 'you lose';
      }
      if ((userValue === 'scissors') & (ComputerValue === 'rock')) {
        you.textContent = 'you lose';
      }
      if ((userValue === 'scissors') & (ComputerValue === 'paper')) {
        you.textContent = 'you win';
      }
      if ((userValue === 'scissors') & (ComputerValue === 'scissors')) {
        you.textContent = 'draw';
      }
    };

    secondChoice.innerHTML = '';
    setTimeout(() => {
      you.classList.remove('hidden');
      playAgain.classList.remove('hidden');
      // you.textContent = 'YOu LOse';
      const housePick = document.querySelector('.house-pick');
      console.log(housePick);
      rpsLogic();
      //   housePick.classList.remove('hidden');
      secondChoice.insertAdjacentHTML('beforeend', secondMarkUp);
      if (you.textContent === 'you win') {
        score.textContent = +score.textContent + 1;
      } else if (you.textContent === 'you lose') {
        score.textContent = +score.textContent - 1;
      }
    }, 1000);
    console.log(playAgain);
    console.log(userValue, ComputerValue);
    // compare results
  });
});

playAgain.addEventListener('click', function () {
  firstChoice.innerHTML = '';
  secondChoice.innerHTML = '';
  thirdChoice.classList.remove('hidden');
  you.classList.add('hidden');
  playAgain.classList.add('hidden');
  const firstMarkUp = `   <div id="first-choice" data-value="paper" data-num="1" class="rps__container-paper rps">
  <p><img src="/images/icon-paper.svg" alt="paper"></p>
  <div class="user-pick hidden">You Picked</div>
</div>`;
  const secondMarkUp = ` <div id="second-choice" data-value="scissors" data-num="2" class="rps__container-scissors rps">
  <p><img src="/images/icon-scissors.svg" alt="scissors"></p>
  <div class="house-pick hidden">The house Picked</div>
</div>`;
  firstChoice.insertAdjacentHTML('beforeend', firstMarkUp);
  secondChoice.insertAdjacentHTML('beforeend', secondMarkUp);
});
