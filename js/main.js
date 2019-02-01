/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');

const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

const rps = {
    r: {
      image: 'url(imgs/rock.png)',
      beats: 's'
    },
    p: {
      image: 'url(imgs/paper.png)',
      beats: 'r'
    },
    s: {
      image: 'url(imgs/scissors.png)',
      beats: 'p'
    }
  };

const rpsLookUp = ['r', 'p', 's'];

/*----- app's state (variables) -----*/
let scores, results, winner;


/*----- cached element references -----*/
const scoreEls = {
    p: document.querySelector('#player > h1'),
    c: document.querySelector('#computer > h1'),
    t: document.querySelector('#tie > h1'),
};

const pResultEl = document.querySelector('#player > div');
const cResultEl = document.querySelector('#computer > div');

//----- event listeners -----

document.getElementById('go-btn').addEventListener('click', handleGo);

/*
1. count down starts: 3, 2, 1, 0 [icebox]
2. once time reaches zero, 
r-- esults for both player and computer must generate (r, p, s)
3. compute who the winner is: player, computer, tie
4. inrease the score for the winner
5. score must be kept
6. render (treansfe the state(model) to the DOM)*/


/*----- functions -----*/
init();

function init() {
    scores = {
        p: 0,
        c: 0,
        t: 0
    };
    results = {
        p: 'r',
        c: 'r'     
    };
    winner = null; // null -- no winner, 'p' -- Player wins, 'c' -- Computer wins, and 't' -- Tie
    render();
}

function render() {
    //transfers all state (vars) to the DOM
    //display scores
    for (let score in scores) scoreEls[score].textContent = scores[score];
    
    //display results
    pResultEl.style.backgroundImage = rps[results.p].image;
    cResultEl.style.backgroundImage = rps[results.c].image;
    
    //display winner
    pResultEl.style.borderColor = winner === 'p' ? 'grey' : 'white';
    cResultEl.style.borderColor = winner === 'c' ? 'grey' : 'white';
}

function handleGo() {

/*
1. count down starts: 3, 2, 1, 0 [icebox]
2. once time reaches zero, 
r-- esults for both player and computer must generate (r, p, s)
*/

results.p = getRandomRPS();
results.c = getRandomRPS();

//3. compute who the winner is: player, computer, tie
winner = results.p === results.c ? 't':
    rps[results.p].beats === results.c ? 'p' : 'c';

// 4. inrease the score for the winner
scores[winner]++;

// 5. score must be kept
// 6. render (treansfe the state(model) to the DOM)*/

render();
}

function getRandomRPS(){
    return rpsLookUp[Math.floor(Math.random() * 3)];


}




//alert('ready!')