
const playGame = function(arg) {

  clearMessages();
  let playerInput = arg;
  
  const getMoveName = function(moveId){

    if(moveId === 1){
      return 'kamieñ';
    } else if (moveId === 2) {
      return 'papier';
    } else if (moveId === 3) {
      return 'no¿yce'
    }

    printMessage('Nie znam ruchu o id ' + moveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(computerMove, playerMove){
    printMessage('Zagra³em ' + computerMove + ', a Ty ' + playerMove);

    if ((computerMove === 'kamieñ' && playerMove === 'papier') ||
       (computerMove === 'papier' && playerMove === 'no¿yce') ||
       (computerMove === 'no¿yce' && playerMove === 'kamieñ')) 
        printMessage('Ty wygrywasz!');
    else if (computerMove == playerMove) printMessage('Remis!');
    else printMessage('Ja wygrywam!'); 
  }






  // Losowanie liczby
  let randomNumber = Math.ceil(Math.random()*3);

  // Ruch komputera 
  let computerMove = getMoveName(randomNumber);
  // printMessage('Mój ruch to: ' + computerMove);

  // Ruch gracza
  // let playerInput = prompt('Wybierz swój ruch! 1: kamieñ, 2: papier, 3: no¿yce.');
  let playerMove = getMoveName(playerInput);
  // printMessage('Twój ruch to: ' + playerMove);

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