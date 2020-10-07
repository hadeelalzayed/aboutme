'use strict';
var score = 0;
var uName = prompt('whas your name?');
alert('welcome');
alert('lets play a game');
function firstQ() {

    var answer1 = prompt('do i like pharmacy?');
    //first qustion about pharmacy
    if (answer1 === 'y' || answer1 === 'yes') {
        //console.log('your answer is wrong');
        alert('your answer is wrong');
    }
    else if (answer1 === 'no' || answer1 === 'n') {
        //console.log('your answer is true');
        alert('your answer is true');
    }
    else {
        //console.log('you should answer yes/y or no/n, please.');
        alert('you should answer yes/y or no/n,please.');
    }
}
firstQ();
//second question about my first job
function secondQ(){

    var answer2 = prompt('is pharmacist was my first job?').toLowerCase();
    if (answer2 === 'y' || answer2 === 'yes') {
        //console.log('your answer is wrong');
        alert('your answer is wrong');
    }
    else if (answer2 === 'no' || answer2 === 'n') {
        //console.log('your answer is true');
        alert('your answer is true');
    }
    
    else {
        //console.log('you should answer yes/y or no/n, please.');
        alert('you sholud answer yes/y or no/n, please.');
    }
}
secondQ();
//third question about studying 
function thirdQ(){

    var answer3 = prompt('did i study at JUST?').toLowerCase();
    if (answer3 === 'y' || answer3 === 'yes') {
        console.log('your answer is wrong');
        alert('your answer is wrong');
    
    }
    else if (answer3 === 'no' || answer3 === 'n') {
        //console.log('your answer is true');
        alert('your answer is true');
    }
    else {
        //console.log('you should answe yes/y or no/n, please.');
        alert('you should answer yes/y or no/n, please.');
    
    }
}
thirdQ();
//forth question about color
function forthQ(){

    var answer4 = prompt('is red my favorit color?').toLowerCase();
    if (answer4 === 'y' || answer4 === 'yes') {
        //console.log('your answer is wrong');
        alert('your answer is wrong');
    }
    else if (answer4 === 'no' || answer4 === 'n') {
        //console.log('your answer is true');
        alert('your answer is true');
    }
    else {
        //console.log('you should answer yes/y or no/n,please.');
        alert('your should answer yes/y or no /n, please.');
    }
}
forthQ();
//fifth question about sport
function fifthQ(){

    var answer5 = prompt('do i love sports').toLowerCase();
    if (answer5 === 'y' || answer5 === 'yes') {
        //console.log('your answer is true');
        alert('your answer is true');
    }
    else if (answer5 === 'no' || answer5 === 'n') {
        //console.log('your answe is wrong');
        alert('your answe is wrong');
    }
    else {
        //console.log('you should answer yes/y or /no/n, please.');
        alert('you should answer yes/y or no/n, please.');
    }
}
fifthQ();
alert('wait a moment now');
alert('we are not finishid yet');

//sixth question about the month i was born

alert('guess in number the correct answer , you have four chances to get the correct answer');
function sixthQ(){

    var numericAns;
    for (var i = 3; i >= 0; i--) {
        numericAns = prompt('which month i was born in ?');
    
        if (numericAns == 5) {
            alert('your answer is correct');
    
            score++;
            console.log(score);
            break;
    
        }
        else if (numericAns > 5) {
            alert('too high, you have ' + i + 'chance now');
    
        }
        else alert('too low, you have ' + i + 'chances now');
        console.log(numericAns);
    }
}
sixthQ();
// seventh question about my favorit places
alert('the next game you have to guess the name of places that i will ask you about');
var places = ['maldives', 'spain', 'italy'];
function seventhQ(){

    for (var j = 5; j >= 0; j--) {
        var stringAns = prompt('guess the name of one of my favioret places');
        if (stringAns == 'maldives' || stringAns == 'spain' || stringAns == 'italy') {
            alert('your answer is correct');
            score++;
            console.log(score);
            break;
        }
        else {
            alert('your answer is not correct , you have ' + j + 'chances now');
            console.log(stringAns)
        }
    }
    alert('correct answer is ' + places);
}
seventhQ();

alert('your score is ' + score + '/7');
console.log(score);