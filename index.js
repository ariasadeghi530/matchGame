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

prompt({
  type: 'input',
  name: 'contestant',
  message: playerNumQues[0]
})
.then ( response => {
  console.log(response.contestant)
    prompt({
      type: 'input',
      name: 'panelistCount',
      
    })
})

