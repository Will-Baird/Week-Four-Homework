var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);



var crystal1 = Math.floor(Math.random() * 11) + 1;
var crystal2 = Math.floor(Math.random() * 11) + 1;
var crystal3 = Math.floor(Math.random() * 11) + 1;
var crystal4 = Math.floor(Math.random() * 11) + 1;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#totalScore").text(counter);

function restartGame() {

targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);
crystal1 = Math.floor(Math.random() * 11) + 1;
crystal2 = Math.floor(Math.random() * 11) + 1;
crystal3 = Math.floor(Math.random() * 11) + 1;
crystal4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#totalScore").text(counter);

}

function win() {

	alert("You win!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}

function lose() {

	alert("You lose!");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}

$('#crystal1').on ('click', function(){
    counter = counter + crystal1;
    
    $('#totalScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#crystal2').on ('click', function(){
    counter = counter + crystal2;
    
    $('#totalScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#crystal3').on ('click', function(){
    counter = counter + crystal3;
    
    $('#totalScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#crystal4').on ('click', function(){
    counter = counter + crystal4;
    
    $('#totalScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  