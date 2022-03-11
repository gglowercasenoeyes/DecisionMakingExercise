//Decision Making Exercise

let randomNum = Math.floor((Math.random()*5));
randomNum++;
console.log(randomNum);

if (randomNum >=4) {
    console.log('Greater Than or Equal To four.');
}
else if (randomNum === 3 || randomNum === 2) {
    console.log('Equal to two or three.');
}
else {
    console.log('Equal to one.');
}

if (randomNum !== 3) {
    console.log('Not equal to three');
}
else {
    console.log('THREE!!!');
} 

if (randomNum !== 3, randomNum !== 5) {
    console.log('NOT equal to three and NOT equal to five :(');
}



//Bonus
let randomCheck = (randomNum >= 4) ? 'Greater Than or Equal To 4' : 'Less Than 4';
console.log(randomCheck);

switch (randomNum) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    case 5:
        console.log('five');
        break;
}
