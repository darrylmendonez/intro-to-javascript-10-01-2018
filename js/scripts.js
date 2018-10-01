// let firstName;
// age = 38
// console.log(age);
// age = 40;
// console.log(age);
//
// var welcomeMsg = "Welcome to this website.";
// var welcomeQuestion = "How are you today?";
// console.log(welcomeMsg + " " + welcomeQuestion);
//
// var number = 2;
// var anotherNumber = 3;
// console.log("-----------");
// console.log(number + anotherNumber * 4);
//
// // object
// var player = {
//   firstName: "Mario",
//   lastName: "Lopez",
//   health: 100,
//   lives: 3
// }
// console.log("the player's health is " + player.health);
//
// var playerDamage = function() {
//   player.health = player.health - 10;
//   console.log("the player is now " + player);
// };
//
// playerDamage();
//
//
//
//
//
// var boilingPtFar = 100;
// var freezingPointFar = 0;
// var currentTempFar = 70;
//
// var convertFarToCels = function(fahrenheit) {
//   var celsius = (fahrenheit - 32) / 1.8000;
//   celsius = Math.round(celsius);
//   console.log('celsius = ' + celsius);
//   if (celsius < 18) {
//     console.log('It is cold outside. Bring your jacket.');
//   } else if (celsius < 24){
//     console.log('You need a thin jacket today.');
//   }
//   else {
//     console.log('No jacket needed at all.')
//   }
// };
//
// convertFarToCels(currentTempFar);
// convertFarToCels(boilingPtFar);
// convertFarToCels(freezingPointFar);
//
//
// // Pythagorean's Theorem
// var smallSide = 3;
// var mediumSide = 5;
// var longSide;
//
// // c squared = a squared + b squared
//  // long side * longSide = ( smallSide * smallSide ) + (mediumSide * mediumSide)
// var pThereom = function(length1, length2) {
//   var longSideSquared = (smallSide * smallSide) + (mediumSide * mediumSide);
//   longSide = Math.sqrt(longSideSquared)
//   longSide = Math.round(longSide);
//   console.log(longSide);
// };
//
// pThereom(smallSide, mediumSide);

// var userName = prompt("Hello, what is your name?");
// console.log(userName);
//
// let displayName = function() {
//   let nameTag = document.getElementById("user-name").innerHTML = userName;
// }
//
// displayName();



// heads or tails game
let userChoice = (prompt("Heads or tails?")).toLowerCase();
console.log("userChoice = " + userChoice)
let displayUserChoice = function() {
  document.getElementById('user-choice').innerHTML = userChoice;
}

displayUserChoice();

let flipCoin = function() {
  let flipResult;
  let randomNumber = Math.random();
  console.log('randomNumber = ', randomNumber);
  if (randomNumber < .5) {
    flipResult = 'heads';
  }
  else {
    flipResult = 'tails'
  }
  console.log(flipResult);
  document.getElementById('coin-img').setAttribute('src', 'https://cdn.dribbble.com/users/58530/screenshots/2323771/coin-flip.gif');
  let showResults = function() {
    document.getElementById('flip-result').innerHTML = 'Coin landed on: ' + flipResult;
    if (userChoice === flipResult) {
      document.getElementById('win-lose-msg').innerHTML = 'You win!';
      document.getElementById('win-lose-msg').setAttribute('class', 'winStyle');
      console.log('You win!');
      document.getElementById('win-lose-img').setAttribute('src', 'https://images.ecosia.org/Q5NlgsLnyROvdwGMSP0lxx83zzs=/0x390/smart/http%3A%2F%2Femojipop.net%2Fdata%2Fimages%2Femoji_set_0.png')
    }
    else {
      document.getElementById('win-lose-msg').innerHTML = 'You lose!';

      document.getElementById('win-lose-msg').setAttribute('class', 'loseStyle');
      console.log('You lose!');

      document.getElementById('win-lose-img').setAttribute('src', 'https://images.ecosia.org/z-nJSIIHZEuJK46AO2TioDbSzMY=/0x390/smart/https%3A%2F%2Fwww.emojibase.com%2Fresources%2Fimg%2Femojis%2Fapple%2Fx1f622.png.pagespeed.ic.IxgTwwGPD1.png')
    }
  }
  setTimeout(showResults, 3000);
}
