let startButton = document.getElementById('start');

startButton.onclick = function handleStart(e) {
  startButton.disabled = true;
  startGame();
}

const game = {
  started: false,
  playerTurn: 'X',
  gameState: [],
  switchTurn: function() {
    if (this.playerTurn === 'X') {
      this.playerTurn = 'O';
    } else {
      this.playerTurn = 'X';
    }
  },
  gameWon: function() {
    const rowOne   = this.row(1);
    const rowTwo   = this.row(2);
    const rowThree = this.row(3);
    [rowOne, rowTwo, rowThree].find(function(row) {
      // check for all one mark or all another with no empty cells
      row[0] === 'X' && row[1] === 'X' && row[2] === 'X'
    })
  },
  row: function(rowNum) {
    if (rowNum === 1) {
      return [this.gameState[0], this.gameState[1], this.gameState[2]];
    } else if (rowNum === 2) {
      return [this.gameState[3], this.gameState[4], this.gameState[5]];
    } else if (rowNum === 3) {
      return [this.gameState[6], this.gameState[7], this.gameState[8]];
    }
  },
  column: function(colNum) {
    if (colNum === 1) {
      return [this.gameState[0], this.gameState[3], this.gameState[6]];
    } else if (colNum === 2) {
      return [this.gameState[1], this.gameState[4], this.gameState[7]];
    } else if (colNum === 3) {
      return [this.gameState[2], this.gameState[5], this.gameState[8]];
    }
  },
  diagonal: function(diagNum) {
    if (diagNum === 1) {
      return [this.gameState[0], this.gameState[4], this.gameState[8]];
    } else if (diagNum === 2) {
      return [this.gameState[2], this.gameState[4], this.gameState[6]];
    }
  },
  setupGameState: function () {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach((cell, index) => {
      this.gameState[index] = cell.textContent;
    })
  }
};

function startGame() {
  game.started = true;
  setupGameBoard();
}

function setupGameBoard() {
  allCells = document.getElementsByClassName('cell');
  game.setupGameState();
  for (let cell of allCells) {
    cell.addEventListener('click', markBoard, { once: true })
  }
  console.log(game.gameState);
}

function markBoard(e) {
  e.target.textContent = game.playerTurn;
  game.setupGameState(); // update the game's gameState array
  console.log(game.gameState);
  game.switchTurn();
}


