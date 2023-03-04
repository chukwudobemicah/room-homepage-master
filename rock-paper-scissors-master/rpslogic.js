// import { userValue } from './script.js';
// import { ComputerValue } from './script.js';
export const rpsLogic = function () {
  if ((userValue === 'paper') & (ComputerValue === 'scissors')) {
    you.textContent = 'You Lose';
  }
  if ((userValue === 'paper') & (ComputerValue === 'rock')) {
    you.textContent = 'You win';
  }
  if ((userValue === 'paper') & (ComputerValue === 'paper')) {
    you.textContent = 'draw';
  }
  if ((userValue === 'rock') & (ComputerValue === 'scissors')) {
    you.textContent = 'You win';
  }
  if ((userValue === 'rock') & (ComputerValue === 'paper')) {
    you.textContent = 'You Lose';
  }
  if ((userValue === 'rock') & (ComputerValue === 'rock')) {
    you.textContent = 'Draw';
  }
  if ((userValue === 'scissors') & (ComputerValue === 'rock')) {
    you.textContent = 'You Lose';
  }
  if ((userValue === 'scissors') & (ComputerValue === 'paper')) {
    you.textContent = 'You win';
  }
  if ((userValue === 'scissors') & (ComputerValue === 'scissors')) {
    you.textContent = 'draw';
  }
};
