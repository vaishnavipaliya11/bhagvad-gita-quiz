const readlineSync= require('readline-sync')

console.log('Welcome to the Quiz');
let username = readlineSync.question("What's your Name: ");
console.log('Hello',username,", Let's Play the Quiz!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',username + ', There are 5 Questions on gita and all are Compulsory.');
console.log('2. You will get 1 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('all the best!!!!')
console.log('\n');
var score=0;

var questions=[{
  question:"who is duryodhan's father ",
  answer:"drihastara"},
  {
    question:"which langauge used in bhagvad gita? ",
    answer:"sanskrit"
  },
  {
    question:"which guna is associated with passion ? ",
    answer:"rajas"
  },
  {
    question:"how many verses bhagvad gita has? ",
    answer:"700"
  },
  {
    question:"lord krishna says he takes avtar whenever ",
    answer:"less peope follow dharma"
  }
  ];