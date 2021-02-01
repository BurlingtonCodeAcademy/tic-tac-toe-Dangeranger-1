/*

setup a listener on the START-BUTTON
  when the START-BUTTON is clicked
    then initialize the game
when a cell in the board is clicked <- (setupBoard, attachListeners, makeClickable)
  then make a mark for the given player in the cell

*/

/*

WIN-CONDITION

given a board with some marks, Xs and Os
for every row, column and diagonal (RUN)
  check the adjacent cells in the RUN
    and if they are all of the same mark
      then declare there is a winner
    and if they are different marks
      keep checking the other RUNS
  and if there is no RUN with a win condition
    and there are no open moves left
      then declare a draw
    otherwise keep playing the game

first column
second column
third column
first row
second row
third row
left diagonal
right diagonal

*/