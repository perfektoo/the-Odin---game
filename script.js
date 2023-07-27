// list of constants and variables
const playerPicture = document.querySelector(".playerpicture");
const computerPicture = document.querySelector(".computerpicture");

const confirm = document.querySelector(".confirm");
const politics = document.querySelectorAll("input[name='politics']");

const playerScoreCounter = document.querySelector(".playerscore");
const computerScoreCounter = document.querySelector(".computerscore");
const roundLeft = document.querySelector(".roundleft");

let yourScore = 0;
let yourComputerScore = 0;
let yourRoundScore = 5;

//constants for pop-up window
const popUp = document.querySelector("#pop-up");
const noThanksButton = document.querySelector(".no-thanks-button");
const playAgainButton = document.querySelector(".play-again-button");
const resetButton = document.querySelector(".play-again");
const winningInfo = document.querySelector(".winning-info");
const yourScoreInfo = document.querySelector(".your-score-info");
const computerScoreInfo = document.querySelector(".computer-score-info");

// playing a round of game
const selection = () => {
  delAlerts();
  for (const f of politics) {
    if (f.checked) {
      let thisRoundPlayerChoice = f.value;
      let thisRoundComputersChoice = getComputerChoice();
      changePicture(f.value);
      changeComputerPicture(thisRoundComputersChoice);
      comparison(thisRoundPlayerChoice, thisRoundComputersChoice);
    }
  }
  if (yourRoundScore === 0) {
    changeVisibilty();
    if (yourScore > yourComputerScore) {
      winningInfo.textContent = "YOU WON!";
    } else if (yourScore < yourComputerScore) {
      winningInfo.textContent = "COMPUTER WON!";
    } else {
      winningInfo.textContent = "DRAW!";
    }
    yourScoreInfo.textContent = "Your score is: " + yourScore;
    computerScoreInfo.textContent = "Computer score is: " + yourComputerScore;
  }
};

//changing the photo for players
function changePicture(name) {
  if (name === "Putin") {
    playerPicture.src = "img/Putin.jpg";
  } else if (name === "Shoigu") {
    playerPicture.src = "img/Shoigu.jpeg";
  } else if (name === "Prigozhin") {
    playerPicture.src = "img/Prigozhin.jpeg";
  }
}

//changing the photo for computer
function changeComputerPicture(name) {
  if (name === "Putin") {
    computerPicture.src = "img/Putin.jpg";
  } else if (name === "Shoigu") {
    computerPicture.src = "img/Shoigu.jpeg";
  } else if (name === "Prigozhin") {
    computerPicture.src = "img/Prigozhin.jpeg";
  }
}

//starting a game by pressing a button "Confirm"
const finalSelection = confirm.addEventListener("click", selection);

//random computer selection
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice == 1) {
    return "Putin";
  } else if (choice == 2) {
    return "Shoigu";
  } else if (choice == 3) {
    return "Prigozhin";
  }
}

//comparison function + updating counters
function comparison(name1, name2) {
  if (name1 === name2) {
    let draw = document.createElement("p");
    let parent = document.querySelector(".info");
    draw.textContent = "DRAW!";
    parent.append(draw);
    yourRoundScore -= 1;
    updatingRoundInfo();
  } else if (name1 === "Putin" && name2 === "Shoigu") {
    let playerWin = document.createElement("p");
    let parent = document.querySelector(".info");
    playerWin.textContent = "YOU WIN!";
    parent.append(playerWin);
    yourScore += 1;
    updatingYourScore(yourScore);
    yourRoundScore -= 1;
    updatingRoundInfo();
  } else if (name1 === "Putin" && name2 === "Prigozhin") {
    let computerWin = document.createElement("p");
    let parent = document.querySelector(".info");
    computerWin.textContent = "COMPUTER WINS!";
    parent.append(computerWin);
    yourComputerScore += 1;
    yourRoundScore -= 1;
    updatingComputerScore();
    updatingRoundInfo();
  } else if (name1 === "Shoigu" && name2 === "Putin") {
    let computerWin = document.createElement("p");
    let parent = document.querySelector(".info");
    computerWin.textContent = "COMPUTER WINS!";
    parent.append(computerWin);
    yourComputerScore += 1;
    yourRoundScore -= 1;
    updatingComputerScore();
    updatingRoundInfo();
  } else if (name1 === "Shoigu" && name2 === "Prigozhin") {
    let playerWin = document.createElement("p");
    let parent = document.querySelector(".info");
    playerWin.textContent = "YOU WIN!";
    parent.append(playerWin);
    yourScore += 1;
    yourRoundScore -= 1;
    updatingYourScore(yourScore);
    updatingRoundInfo();
  } else if (name1 === "Prigozhin" && name2 === "Putin") {
    let playerWin = document.createElement("p");
    let parent = document.querySelector(".info");
    playerWin.textContent = "YOU WIN!";
    parent.append(playerWin);
    yourScore += 1;
    yourRoundScore -= 1;
    updatingYourScore(yourScore);
    updatingRoundInfo();
  } else if (name1 === "Prigozhin" && name2 === "Shoigu") {
    let computerWin = document.createElement("p");
    let parent = document.querySelector(".info");
    computerWin.textContent = "COMPUTER WINS!";
    parent.append(computerWin);
    yourComputerScore += 1;
    yourRoundScore -= 1;
    updatingComputerScore();
    updatingRoundInfo();
  }
}

//updating counters
function updatingYourScore() {
  while (playerScoreCounter.firstChild) {
    playerScoreCounter.removeChild(playerScoreCounter.firstChild);
  }
  playerScoreCounter.append(yourScore);
}

function updatingComputerScore() {
  while (computerScoreCounter.firstChild) {
    computerScoreCounter.removeChild(computerScoreCounter.firstChild);
  }
  computerScoreCounter.append(yourComputerScore);
}

function updatingRoundInfo() {
  while (roundLeft.firstChild) {
    roundLeft.removeChild(roundLeft.firstChild);
  }
  roundLeft.append(yourRoundScore);
}

// deleting the info on winning
function delAlerts() {
  let parent = document.querySelector(".info");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// end of game message
if (yourRoundScore === 0) {
  changeVisibilty();
}

// pop-up window function
function changeVisibilty() {
  popUp.style = "display:block";
}

//pop-up buttons logic

playAgainButton.addEventListener("click", () => {
  let parent = document.querySelector(".info");
  parent.removeChild(parent.firstChild);
  popUp.style = "display:none";

  yourScore = 0;
  yourComputerScore = 0;
  yourRoundScore = 5;

  playerScoreCounter.removeChild(playerScoreCounter.firstChild);
  playerScoreCounter.append(yourScore);

  computerScoreCounter.removeChild(computerScoreCounter.firstChild);
  computerScoreCounter.append(yourComputerScore);

  roundLeft.removeChild(roundLeft.firstChild);
  roundLeft.append(yourRoundScore);

  playerPicture.src = "img/dove.jpeg";
  computerPicture.src = "img/dove.jpeg";
});

noThanksButton.addEventListener("click", () => {
  popUp.style = "display:none";
  confirm.disabled = true;
  confirm.style = "background-color:red";
  resetButton.style = "background-color:lightgreen";
  let parent = document.querySelector(".info");
  parent.removeChild(parent.firstChild);
});

resetButton.addEventListener("click", () => {
  confirm.disabled = false;
  confirm.style = "background-color:none";
  resetButton.style = "background-color:none";

  yourScore = 0;
  yourComputerScore = 0;
  yourRoundScore = 5;

  playerScoreCounter.removeChild(playerScoreCounter.firstChild);
  playerScoreCounter.append(yourScore);

  computerScoreCounter.removeChild(computerScoreCounter.firstChild);
  computerScoreCounter.append(yourComputerScore);

  roundLeft.removeChild(roundLeft.firstChild);
  roundLeft.append(yourRoundScore);
  playerPicture.src = "img/dove.jpeg";
  computerPicture.src = "img/dove.jpeg";

  let parent = document.querySelector(".info");
  parent.removeChild(parent.firstChild);
});
