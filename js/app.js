'use strict';
var uName = prompt('whas your name?');
alert('welcome');
alert('lets play a game');
var answer1 = prompt('do i like pharmacy?');
//first qustion about pharmacy
if (answer1 === 'y' || answer1 ==='yes') {
  //console.log('your answer is wrong');
  alert('your answer is wrong');
}
else if (answer1 ==='no' || answer1 ==='n') {
  //console.log('your answer is true');
  alert('your answer is true');
}
else{
    //console.log('you should answer yes/y or no/n, please.');
    alert('you should answer yes/y or no/n,please.');
}
//second question about my first job
var answer2 = prompt('is pharmacist was my first job?').toLowerCase();
if (answer2 === 'y' || answer2 === 'yes') {
    //console.log('your answer is wrong');
    alert('your answer is wrong');
}
else if (answer2 ==='no' || answer2 ==='n') {
    //console.log('your answer is true');
    alert('your answer is true');
  }

else{
    //console.log('you should answer yes/y or no/n, please.');
    alert('you sholud answer yes/y or no/n, please.');
}
//third question about studying 
var answer3 = prompt('did i study at JUST?').toLowerCase();
 if (answer3 === 'y' || answer3 ==='yes') {
     console.log('your answer is wrong');
     alert('your answer is wrong');
     
 }
 else if (answer3 ==='no' || answer3 ==='n') {
    //console.log('your answer is true');
    alert('your answer is true');
  }
 else{
     //console.log('you should answe yes/y or no/n, please.');
     alert('you should answer yes/y or no/n, please.');

 }
 //forth question about color
 var answer4 = prompt('is red my favorit color?').toLowerCase();
 if (answer4 === 'y' || answer4 === 'yes') {
     //console.log('your answer is wrong');
     alert('your answer is wrong');
 }
 else if(answer4 === 'no' || answer4 === 'n'){
     //console.log('your answer is true');
     alert('your answer is true');
 }
 else{
     //console.log('you should answer yes/y or no/n,please.');
     alert('your should answer yes/y or no /n, please.');
 }
 //fifth question about sport
 var answer5 = prompt('do i love sports').toLowerCase();
 if (answer5 === 'y' || answer5 === 'yes') {
     //console.log('your answer is true');
     alert('your answer is true');
 }
else if (answer5 === 'no' || answer5 === 'n') {
    //console.log('your answe is wrong');
    alert('your answe is wrong');
}
else{
    //console.log('you should answer yes/y or /no/n, please.');
    alert('you should answer yes/y or no/n, please.');
}
alert('Thanks for your answer, have a great day..');