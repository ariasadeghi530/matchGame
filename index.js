let playerArr = [];
let contestant = '';
let contestAnswer = '';

const prompt = require('inquirer').createPromptModule()


let playerNumQues = [
  'What is the Contestant name?',
  'How many panelists?'
];

let questionsArr = [
  'What is your favorite color?',
  'What is your favorite movie?',
  'When is your birthday?',
  'What is your favorite book?'
];
let panelQuestionsArr = [
  `What is the contestant's favorite color?`,
  `What is the contestant's favorite movie?`,
  `When is the contestant's birthday?`,
  `What is the contestant's favorite book?`
];


function startGame() {
  prompt([{
    type: 'input',
    name: 'contestant',
    message: playerNumQues[0]
  },
  {
    type: 'number',
    name: 'numPanel',
    message: playerNumQues[1]
  }])
    .then(response => {
      contestant = response.contestant;
      getNumPlayers(response);
      
    })
    .catch(e => console.error(e))
}

async function getNumPlayers(hotdog) {
  for (let i = 0; i < hotdog.numPanel; i++) {
    const numContest = await prompt({
      type: 'input',
      name: `panelist`,
      message: `Enter panelist #${i + 1} name: `
    })
      .then(({ panelist }) => {
        playerArr.push(panelist);
      })
      .catch(e => console.error(e));
  }
  // update player arr to store scores
  playerArr.forEach((elem, i) => {
    playerArr[i] = {
      name: elem,
      score: 0
    }

  })
  // console.log(playerArr);
  questions();

}
async function questions() {
for (let j = 0; j < questionsArr.length; j++) {
  const contPrompt = await prompt([
    {
      type: 'password',
      name: 'question0',
      message: `${contestant}, ` + questionsArr[j]
    }
  ]) 
  .then(response => {
   contestAnswer = response.question0;
  //  console.log(contestAnswer);
  })
  .catch(e => console.error());
  
  for(let i = 0; i < playerArr.length; i++){
    const panelistPrompts = await prompt([
      {
        type: 'password',
        name: `question`,
        message: `${playerArr[i].name}, ` + panelQuestionsArr[j]
      }
    ])
      .then(({question}) => {
       
        if(question === contestAnswer){
          playerArr[i].score++;
        }
       
    })
      .catch(e => console.error());
  }
}
  endGame();

  }

  function endGame() {
    let winner = {
      name: 'No winner',
      score: 0
    };
    for(let i = 0; i < playerArr.length; i++ ){
      if(winner.score < playerArr[i].score){
        winner = playerArr[i];
      }
    }
    console.log(winner.name + ' is the winner with a score of ' + winner.score);
  }


startGame();

