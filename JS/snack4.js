console.log('S4-JS-OK');



//*Random number function
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//?Checking random number function
const randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);

//*Looping on football team array
footballTeams.forEach(team => {
    //*Random value for score between min & max
    team.score = getRandomNumber(0, 10);
    //*Random value for fouls between min & max
    team.fouls = getRandomNumber(0, 5);
});
//? Checking footballTeams array content
console.log(footballTeams);

//*Map method for format output
footballTeams.map(({ name, fouls }) => {
    console.log(`Nome squadra: ${name}, Falli subiti: ${fouls}`);
});