let userName=prompt('What is your name?');
let userAge=prompt('How old are you?');
let userChosenName=prompt('Give a character name');
let userChosenVerb=prompt('Give a verb PRESENT TENSE like runs');
let userChosenLocation=prompt('Give a location, can be a country, state, anything');
let userChosenGender=prompt('Give your character a gender (EX: her, his, their)');
let userChosenSecondCharacter=prompt('Name another character');
let userChosenSecondCharacterAdjective=prompt('Give your second character an adjective/occupation or two');
let userChosenThirdCharacter=prompt('Give me a third character\'s name');
let userChosenThirdCharacterAdjective=prompt('Give me an adjective/occupation for the third character');
let userChosenSchool=prompt('Give me a school please');


console.log(userName);
console.log(userAge);
console.log(userChosenName);
console.log(userChosenVerb);
console.log(userChosenLocation);
console.log(userChosenGender);
console.log(userChosenSecondCharacter);
console.log(userChosenSecondCharacterAdjective);
console.log(userChosenThirdCharacter);
console.log(userChosenThirdCharacterAdjective);
console.log(userChosenSchool);

let myStory=`Hello, ${userName}! How are you doing today? How does it feel to be ${userAge} years old?`;
console.log(myStory);

let myStory2=`Today I will start you some context. There's a kid named ${userChosenName} who ${userChosenVerb} to ${userChosenLocation}. During ${userChosenGender} visit, ${userChosenName} meets ${userChosenSecondCharacter}, a(n) ${userChosenSecondCharacterAdjective}. Now, these cards will provide separate frames to continue your story. Please have fun.`;
console.log(myStory2);

let endingOfMyStory1=`After meeting ${userChosenSecondCharacter}, ${userChosenName} and ${userChosenSecondCharacter} get along very well and end up being the bestest of friends. Together, they embark on a journey in ${userChosenLocation} about looking for the biggest mountains to exist so they can chill. However, while chilling on one mountain, ${userChosenSecondCharacter} falls off. Due to their permanent promise of always sticking together, ${userChosenName} falls off too.`;
console.log(endingOfMyStory1);

let endingOfMyStory2=`idk`;
console.log(endingOfMyStory2);

document.getElementById('story').innerHTML=myStory;
document.getElementById('story2').innerHTML=myStory2;
document.getElementById('endingofmyStory1').innerHTML=endingOfMyStory1;
document.getElementById('endingofmyStory2').innerHTML=endingOfMyStory2;
