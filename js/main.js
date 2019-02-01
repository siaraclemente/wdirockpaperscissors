/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/
let scores, results, winner;

/*----- cached element references -----*/


/*----- event listeners -----
1. count down starts: 3, 2, 1, 0 [icebox]
2. once time reaches zero, 
r-- esults for both player and computer must generate (r, p, s)
3. compute who the winner is: player, computer, tie
4. inrease the score for the winner
5. score must be kept
6. render (treansfe the state(model) to the DOM)*/


/*----- functions -----*/

//alert('ready!')