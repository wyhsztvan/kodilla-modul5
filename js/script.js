
const playGame = function(arg) {

  clearMessages();
  let playerInput = arg;
  
  const getMoveName = function(moveId){

    if(moveId === 1){
      return 'kamie�';
    } else if (moveId === 2) {
      return 'papier';
    } else if (moveId === 3) {
      return 'no�yce'
    }

    printMessage('Nie znam ruchu o id ' + moveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(computerMove, playerMove){
    printMessage('Zagra�em ' + computerMove + ', a Ty ' + playerMove);

    if ((computerMove === 'kamie�' && playerMove === 'papier') ||
       (computerMove === 'papier' && playerMove === 'no�yce') ||
       (computerMove === 'no�yce' && playerMove === 'kamie�')) 
        printMessage('Ty wygrywasz!');
    else if (computerMove == playerMove) printMessage('Remis!');
    else printMessage('Ja wygrywam!'); 
  }






  // Losowanie liczby
  let randomNumber = Math.ceil(Math.random()*3);

  // Ruch komputera 
  let computerMove = getMoveName(randomNumber);
  // printMessage('M�j ruch to: ' + computerMove);

  // Ruch gracza
  // let playerInput = prompt('Wybierz sw�j ruch! 1: kamie�, 2: papier, 3: no�yce.');
  let playerMove = getMoveName(playerInput);
  // printMessage('Tw�j ruch to: ' + playerMove);

  // wynik gry
  displayResult(computerMove,playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});