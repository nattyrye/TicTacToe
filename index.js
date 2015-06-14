//list game variables

var playerPiece = "X"; 
var computerPiece = "O";

$("div[id*='click']").click(function() {  
  $(this).text(playerPiece);   // Player Goes
  checkWinner('player');               // Check for winner after player moves
  computersTurn();             // Computer Goes
  checkWinner('computer');               // Check for Winner after computer moves
});;

function computersTurn(){
  // Find all boxes that haven't been selected
  var list = $("div[class='one']").filter(function(i,v){
    return $.trim($(v).text()).length == 0;
  })
  // select a random unused box to make the computers move
  var halsMove = list[Math.floor(Math.random()*list.length)];
  // set random box to O
  $(halsMove).text(computerPiece);
}

// current player is either computer or playerpiece

function checkWinner(currentPlayer) {
  
  var players = [computerPiece, playerPiece]
  
  // loop through with X and O to find winning combinations

  for (var i in players) {
    if(oneclick.innerHTML==players[i] && twoclick.innerHTML==players[i] && threeclick.innerHTML==players[i] ) { youWon(players[i]); }
    if(fourclick.innerHTML==players[i] && fiveclick.innerHTML==players[i] && sixclick.innerHTML==players[i] ) { youWon(players[i]); }
    if(sevenclick.innerHTML==players[i] && eightclick.innerHTML==players[i] && nineclick.innerHTML==players[i] ) { youWon(players[i]); }
    if(oneclick.innerHTML==players[i] && fourclick.innerHTML==players[i] && sevenclick.innerHTML==players[i] ) { youWon(players[i]); }
    if(twoclick.innerHTML==players[i] && fiveclick.innerHTML==players[i] && eightclick.innerHTML==players[i] ) { youWon(players[i]); }  
    if(threeclick.innerHTML==players[i] && sixclick.innerHTML==players[i] && nineclick.innerHTML==players[i] ) { youWon(players[i]); }  
    if(oneclick.innerHTML==players[i] && fiveclick.innerHTML==players[i] && nineclick.innerHTML==players[i] ) { youWon(players[i]); }  
    if(threeclick.innerHTML==players[i] && fiveclick.innerHTML==players[i] && sevenclick.innerHTML==players[i] ) { youWon(players[i]); }  
  }

  // Check for tie by searching for 9 filled boxes
  var list = $("div[class='one']").filter(function(i,v){
    return $.trim($(v).text()).length == 1;
  })
  if(list.length==9){
    youTied(currentPlayer);
  }

}

function youWon(winner){
  alert("OMG, " + winner + " won!");
  if(winner==playerPiece){
    turn.innerHTML="Computer moves first!";
  }else{
    turn.innerHTML="You move first!";
  }
  clearBoard();
}

function youTied(currentPlayer){
  alert("Nice tie!");
  if(currentPlayer=="computer"){
    turn.innerHTML="You move first!";  
  }else{
    turn.innerHTML="Computer moves first!";
  }
  clearBoard();
}

function clearBoard() {  
  $("div[id*='click']").text("");
}




