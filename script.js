let userName=prompt('What is your name?');
let userAge=prompt('How old are you?');
let userChosenName=prompt('Give a character name');
let userChosenVerb=prompt('Give a verb PRESENT TENSE like runs');
let userChosenLocation=prompt('Give a location, can be a country, state, anything');
let userChosenGender=prompt('Give your character a gender (EX: her, his, their)');
let userChosenSecondCharacter=prompt('Name another character');
let userChosenSecondCharacterAdjective=prompt('Give your second character an adjective/occupation or two.');
console.log(userName);
console.log(userAge);
console.log(userChosenName);
console.log(userChosenVerb);
console.log(userChosenLocation);
console.log(userChosenGender);
console.log(userChosenSecondCharacter);
console.log(userChosenSecondCharacterAdjective);

let myStory=`hello, ${userName}! How are you doing today? How does it feel to be ${userAge} years old?`;
console.log(myStory);

let myStory2=`Today I will tell you a story about a kid named ${userChosenName} who ${userChosenVerb} to ${userChosenLocation}. During ${userChosenGender} visit, ${userChosenName} meets ${userChosenSecondCharacter}, a(n) ${userChosenSecondCharacterAdjective}.`;
console.log(myStory2);

let myStory3=`a`;
console.log(myStory3);

document.getElementById('story').innerHTML=myStory;
document.getElementById('story2').innerHTML=myStory2;
document.getElementById('story3').innerHTML=myStory3;

