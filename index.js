// let contestAnswers = [];
let playerArr =[];
let contestant = '';

// // based on input from inquirer
// for (let i = 0; i < numContestants; i++){
//   playerArr.push({
//     name: `${inputName}`,
//     score: 0
//   })
// }

const prompt = require('inquirer').createPromptModule()


let playerNumQues = [
  'What is the Contestant name?',
  'How many panelists?'
]

let questions = [
  'What is your favorite color?',
  'What is your favorite movie?',
  'When is your birthday?',
  'What is your favorite book?',
  ''
]
async function startGame() {
 const initPrompt = await prompt([{
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

async function getNumPlayers(hotdog){
  for(let i = 0; i < hotdog.numPanel; i++) {
    const numContest = await prompt({
      type: 'input',
      name: `panelist`,
      message: `Enter panelist #${i + 1} name: `
    })
    .then( ({panelist}) => {
      playerArr.push(panelist);
    })
  }
  console.log(playerArr);
  console.log(contestant);
  playerArr.forEach((elem, i) => {
    playerArr[i] = {
      name: elem,
      score: 0
    }
  })
  console.log(playerArr);
}
startGame();