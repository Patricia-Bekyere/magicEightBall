// declaring the user name to as an empty string
let userName = 'Tricia';

// print hello with the user name
userName? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// accepting user questions
let userQuestion = 'How long does elephants live on earth ?';

//printing user's name and questions to the console
console.log(`${userName} asked : ${userQuestion}`);

//generating random numbers
let randomNumber = Math.floor(Math.random() * 8);

// declaring a variable
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = ' It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;  
  case 2:
    eightBall = 'Reply hazy try again';
    break;  
  case 3:
    eightBall = 'Cannot predict now';
    break;  
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;    
  case 6:
    eightBall = 'Outlook not so good';
    break;  
  case 7:
    eightBall = 'Signs point to yes';
    break;  
}

// printing the magic eight ball's answer

console.log(eightBall); 


