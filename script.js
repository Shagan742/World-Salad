let userName=prompt('What is your name?');
let userAge=prompt('How old are you?');
let userChosenName=prompt('Give a character name');
let userChosenVerb=prompt('Give a verb PRESENT TENSE like runs');
let userChosenLocation=prompt('Give a location, can be a country, state, anything');
let userChosenGender=prompt('Give your character a gender (EX: her, his, their, its)');
let userChosenGenderTwo=prompt('To match the chosen gender, give one again (EX: her, him, them, it)');
let userChosenGenderThree=prompt('Just one more... (EX: he, she, it, they)');
let userChosenSecondCharacter=prompt('Name another character');
let userChosenSecondCharacterAdjective=prompt('Give your second character an adjective/occupation or two');
let userChosenThirdCharacter=prompt('Give me a third character\'s name');
let userChosenThirdCharacterAdjective=prompt('Give me an adjective/occupation for the third character');
let userChosenSchool=prompt('Give me a school please in the (Name of school) (Elementary/Middle/High) School format ');
let userChosenAmountOfKids=prompt('Give me any number in the world');

console.log(userName);
console.log(userAge);
console.log(userChosenName);
console.log(userChosenVerb);
console.log(userChosenLocation);
console.log(userChosenGender);
console.log(userChosenGenderTwo);
console.log(userChosenGenderThree);
console.log(userChosenSecondCharacter);
console.log(userChosenSecondCharacterAdjective);
console.log(userChosenThirdCharacter);
console.log(userChosenThirdCharacterAdjective);
console.log(userChosenSchool);
console.log(userChosenAmountOfKids);

let myStory=`Hello, <span class="stylepromptinput">${userName}</span>! How are you doing today? How does it feel to be <span class="stylepromptinput">${userAge}</span> years old?`;
console.log(myStory);

let myStory2=`Today I will start you some context. There's a kid named <span class="stylepromptinput">${userChosenName}</span> who <span class="stylepromptinput">${userChosenVerb}</span> to <span class="stylepromptinput">${userChosenLocation}</span>. During <span class="stylepromptinput">${userChosenGender}</span> visit, <span class="stylepromptinput">${userChosenName}</span> meets <span class="stylepromptinput">${userChosenSecondCharacter}</span>, a(n) <span class="stylepromptinput">${userChosenSecondCharacterAdjective}</span>. Now, these cards will provide separate frames to continue your story. Please have fun reading my hard work.`;
console.log(myStory2);

let endingOfMyStory1=`After meeting <span class="stylepromptinput">${userChosenSecondCharacter}</span>, <span class="stylepromptinput">${userChosenName}</span> and <span class="stylepromptinput">${userChosenSecondCharacter}</span> get along very well and end up being the bestest of friends. Together, they embark on a journey in <span class="stylepromptinput">${userChosenLocation}</span> about looking for the biggest mountains to exist so they can chill. However, while chilling on one mountain, <span class="stylepromptinput">${userChosenSecondCharacter}</span> falls off. Due to their permanent promise of always sticking together, <span class="stylepromptinput">${userChosenName}</span> falls off too.`;
console.log(endingOfMyStory1);

let endingOfMyStory2=`Together, <span class="stylepromptinput">${userChosenName}</span> and <span class="stylepromptinput">${userChosenSecondCharacter}</span> go to <span class="stylepromptinput">${userChosenSchool}</span>. At school, they both eventually meet <span class="stylepromptinput">${userChosenThirdCharacter}</span>, a(n) <span class="stylepromptinput">${userChosenThirdCharacterAdjective}</span>. However, <span class="stylepromptinput">${userChosenThirdCharacter}</span> ended up being a gossip and only spread negative rumors about <span class="stylepromptinput">${userChosenName}</span> and <span class="stylepromptinput">${userChosenSecondCharacter}</span>. This horrendous act broke <span class="stylepromptinput">${userChosenName}</span>\'s trust completely, causing <span class="stylepromptinput">${userChosenGenderTwo}</span> to unfriend both <span class="stylepromptinput">${userChosenSecondCharacter}</span> and <span class="stylepromptinput">${userChosenThirdCharacter}</span>. After that, <span class="stylepromptinput">${userChosenName}</span> realized that the trustworthiest best friend one can have is themself. `;
console.log(endingOfMyStory2);

let endingOfMyStory3=`<span class="stylepromptinput">${userChosenName}</span> and <span class="stylepromptinput">${userChosenSecondCharacter}</span> get along very well, and end up creating some chemistry with each other. 3 months later, they get married and have <span class="stylepromptinput">${userChosenAmountOfKids}</span> kids. <span class="stylepromptinput">${userChosenName}</span> even showers <span class="stylepromptinput">${userChosenSecondCharacter}</span> with tons of gifts every day. However, <span class="stylepromptinput">${userChosenSecondCharacter}</span> has an affair with <span class="stylepromptinput">${userChosenThirdCharacter}</span>, and <span class="stylepromptinput">${userChosenName}</span> finds it out. <span class="stylepromptinput">${userChosenGenderThree}</span> exposes the affair and leaves heartbroken. Next time, <span class="stylepromptinput">${userChosenName}</span> will never mate again.`;
console.log(endingOfMyStory3);

document.getElementById('story').innerHTML=myStory;
document.getElementById('story2').innerHTML=myStory2;
document.getElementById('endingofmyStory1').innerHTML=endingOfMyStory1;
document.getElementById('endingofmyStory2').innerHTML=endingOfMyStory2;
document.getElementById('endingofmyStory3').innerHTML=endingOfMyStory3;


